const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// ====== MongoDB Connection ======
// If MongoDB is running in Docker, use the container name `mongo` and credentials
// const MONGO_URI = "mongodb://mrudula_admin:mrudula_password@mongo:27017/formdb?authSource=admin";

const MONGO_URI = "mongodb://127.0.0.1:27017/formdb";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ====== Schema & Model ======
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ====== POST: Create New User ======
app.post("/users", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newUser = new User({ name, email, message });
    await newUser.save();
    res.status(201).json({ success: true, message: "User created", data: newUser });
  } catch (err) {
    console.error("❌ Error saving user:", err);
    res.status(500).json({ success: false, message: "Error saving user", error: err.message });
  }
});

// ====== GET: All Users ======
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (err) {
    console.error("❌ Error fetching users:", err);
    res.status(500).json({ success: false, message: "Error fetching users", error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
