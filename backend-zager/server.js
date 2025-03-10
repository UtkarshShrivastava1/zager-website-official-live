const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
require("colors"); // Import colors.js

// Load environment variables from .env file
dotenv.config();

const app = express();

// Environment-based configurations
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";

// Use different MongoDB URIs based on the environment
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

const port = process.env.PORT || 5000;

// Middleware: Parse JSON bodies
app.use(express.json());

// Middleware: CORS configuration
if (isProduction) {
  app.use(
    cors({
      origin: [process.env.FRONTEND_URL], // Your production frontend URL
      credentials: true,
    })
  );
  console.log("CORS configured for production".green);
} else {
  app.use(cors()); // Allow all origins in development
  console.log("CORS configured for local development".yellow);
}

// Middleware: Security and performance optimizations for production
if (isProduction) {
  app.use(compression()); // Compress response bodies
  app.use(helmet()); // Secure HTTP headers
  console.log("Compression and Helmet enabled for production".cyan);
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `Successfully connected to MongoDB (${process.env.NODE_ENV})`
        .brightMagenta.bold.italic
    );
    console.log(`MongoDB URI:`.blue + ` ${mongoURI}`.brightMagenta.bold.italic);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB".red, err);
    process.exit(1);
  });

// Routes
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");

app.use("/api/admin/auth", adminRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/job-applications", jobApplicationRoutes);

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(
  `Static files are served from: ${path.join(__dirname, "uploads")}`.magenta
);

// Global error handler for unhandled errors during runtime
app.use((err, req, res, next) => {
  console.error("[Global Error Handler]".red, err.stack || err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// Graceful shutdown: Close MongoDB connection when app is terminated
process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing MongoDB connection...".yellow);
  await mongoose.connection.close();
  console.log("MongoDB connection closed.".yellow);
  process.exit(0);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("[Uncaught Exception]".red, err.message);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("[Unhandled Rejection]".red, err.message);
  process.exit(1);
});

// Start the server
app.listen(port, () => {
  const backendURL = `http://localhost:${port}`;
  const appName = "Zager Website";
  const startTime = new Date().toLocaleString();
  const nodeVersion = process.version;
  const os = require("os");
  const hostName = os.hostname();

  console.log("\n===============================".brightCyan);
  console.log(`${appName} is up and running!`.brightGreen.bold);
  console.log(`Environment: `.blue + `${process.env.NODE_ENV}`.brightBlue);
  console.log(`Port: `.blue + `${port}`.brightYellow);
  console.log(`Backend URL: `.blue + `${backendURL}`.brightCyan.bold);
  console.log(
    `MongoDB: `.blue +
      `${isProduction ? "Production" : "Development"} Database in use.`
        .brightMagenta
  );
  console.log(`Node.js Version: `.blue + `${nodeVersion}`.brightGreen);
  console.log(`Host Machine: `.blue + `${hostName}`.brightYellow);
  console.log(`Start Time: `.blue + `${startTime}`.brightWhite);
  console.log("===============================\n".brightCyan);
});
