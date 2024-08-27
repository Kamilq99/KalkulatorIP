package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin router
	router := gin.Default()

	// Load HTML templates
	router.LoadHTMLGlob("../template/**/*")

	// Define routes
	router.GET("/", homeHandler)
	router.GET("/AboutUs", aboutUsHandler)
	router.GET("/Contact", contactHandler)
	router.POST("/calculate", calculateHandler)

	// Start the server
	log.Println("Server started at http://localhost:8080")
	router.Run(":8080")
}

func homeHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "home_page/home.html", nil)
}

func aboutUsHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "about_us_page/aboutus.html", nil)
}

func contactHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "contact_page/contact.html", nil)
}

func calculateHandler(c *gin.Context) {
	ipAddress := c.PostForm("ipAddress")
	networkMask := c.PostForm("networkMask")
	subnetCount := c.PostForm("subnetCount")

	// Log the received data
	log.Printf("Received data for IP Calculation:\nIP Address: %s\nNetwork Mask: %s\nNumber of Subnets: %s\n", ipAddress, networkMask, subnetCount)

	// Redirect back to the home page or display result
	c.Redirect(http.StatusSeeOther, "/")
}
