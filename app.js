const express = require("express")
const app = express()

// Environment Variables
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

// View Engine -- EJS
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const morgan = require("morgan")
app.use(morgan('dev'))

// Static Files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "Public/css"))
app.use("/img", express.static(__dirname + "Public/img"))
app.use("/js", express.static(__dirname + "Public/js"))

// Routes
const homeRoutes = require("./Src/Routes/homeRoutes");

// Router Middlewares
app.use("/home", homeRoutes);

app.get("/", (req, res) => {
    res.redirect("/home");
});

// 404 Page
app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        message: "Page not found!"
    })
})

// Listen
app.listen(PORT, (error) => {
    if (error) {
        return console.log("Server error!")
    }
    console.log(`App listening on port ${PORT}`)
})