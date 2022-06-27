// Environment Variables
const dotenv = require("dotenv");
dotenv.config();

const index = (req, res) => {
    res.render("index", {
        title: "Home",
        message: "Welcome to the home page!"
    });
}

// Export the functions to be used in the routes
module.exports = {
    index
};