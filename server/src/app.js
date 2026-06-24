const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();


// Middleware FIRST
app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

// Routes AFTER middleware

const inquiryRoutes = require("./routes/inquiry_routes");
app.use("/api/inquiries", inquiryRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Mogal PG API is running"
    });
});

module.exports = app;