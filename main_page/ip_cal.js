document.addEventListener('DOMContentLoaded', function() {
    const subnetMaskSelect = document.getElementById('subnetMask');
    
    // Populate subnet masks
    for (let i = 0; i <= 32; i++) {
        const option = document.createElement('option');
        const mask = i === 0 ? '0.0.0.0' : ((0xffffffff << (32 - i)) >>> 0).toString(2).padStart(32, '0')
            .match(/.{8}/g).map(b => parseInt(b, 2)).join('.') + ` = ${i}`;
        option.value = i;
        option.textContent = mask;
        subnetMaskSelect.appendChild(option);
    }

    document.getElementById('ipForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const ipAddress = document.getElementById('ipAddress').value;
        const subnetMaskBits = parseInt(document.getElementById('subnetMask').value, 10);
        
        // Function to convert IP to binary string
        function toBinary(ip) {
            return ip.split('.').map(num => parseInt(num, 10).toString(2).padStart(8, '0')).join('.');
        }
        
        // Function to convert binary string to decimal
        function binaryToDecimal(binary) {
            return parseInt(binary.replace(/\./g, ''), 2).toString(10);
        }
        
        // Function to calculate network and broadcast addresses
        function calculateAddresses(ip, maskBits) {
            const ipParts = ip.split('.').map(Number);
            const mask = (0xffffffff << (32 - maskBits)) >>> 0;
            const ipDecimal = ipParts.reduce((acc, part, i) => acc + (part << (24 - i * 8)), 0);
            const networkDecimal = ipDecimal & mask;
            const broadcastDecimal = networkDecimal | (~mask >>> 0);
            
            const network = [
                (networkDecimal >> 24) & 255,
                (networkDecimal >> 16) & 255,
                (networkDecimal >> 8) & 255,
                networkDecimal & 255
            ].join('.');
            
            const broadcast = [
                (broadcastDecimal >> 24) & 255,
                (broadcastDecimal >> 16) & 255,
                (broadcastDecimal >> 8) & 255,
                broadcastDecimal & 255
            ].join('.');
            
            return {
                network,
                broadcast,
                ipBinary: toBinary(ip),
                maskBinary: toBinary([
                    (mask >> 24) & 255,
                    (mask >> 16) & 255,
                    (mask >> 8) & 255,
                    mask & 255
                ].join('.')),
                networkBinary: toBinary(network),
                broadcastBinary: toBinary(broadcast),
                maskDecimal: [
                    (mask >> 24) & 255,
                    (mask >> 16) & 255,
                    (mask >> 8) & 255,
                    mask & 255
                ].join('.'),
                networkDecimal,
                broadcastDecimal,
                minHost: network.split('.').map(Number).slice(0, -1).concat([Number(network.split('.').pop()) + 1]).join('.'),
                maxHost: broadcast.split('.').map(Number).slice(0, -1).concat([Number(broadcast.split('.').pop()) - 1]).join('.'),
                hostCount: Math.pow(2, 32 - maskBits) - 2
            };
        }
        
        const addresses = calculateAddresses(ipAddress, subnetMaskBits);
        
        document.getElementById('ipDecimal').textContent = ipAddress;
        document.getElementById('ipBinary').textContent = addresses.ipBinary;
        document.getElementById('maskDecimal').textContent = addresses.maskDecimal;
        document.getElementById('maskBinary').textContent = addresses.maskBinary;
        document.getElementById('networkDecimal').textContent = addresses.network + '/' + subnetMaskBits;
        document.getElementById('networkBinary').textContent = addresses.networkBinary;
        document.getElementById('broadcastDecimal').textContent = addresses.broadcast;
        document.getElementById('broadcastBinary').textContent = addresses.broadcastBinary;
        document.getElementById('hostMinDecimal').textContent = addresses.minHost;
        document.getElementById('hostMinBinary').textContent = toBinary(addresses.minHost);
        document.getElementById('hostMaxDecimal').textContent = addresses.maxHost;
        document.getElementById('hostMaxBinary').textContent = toBinary(addresses.maxHost);
        document.getElementById('hostsCount').textContent = addresses.hostCount;
        document.getElementById('hostsClass').textContent = subnetMaskBits <= 8 ? 'Class A' :
                                                                subnetMaskBits <= 16 ? 'Class B' : 'Class C';
    });
});