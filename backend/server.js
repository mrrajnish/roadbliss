const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (fixed)
mongoose.connect("mongodb://127.0.0.1:27017/roadbliss");

// Schema
const User = mongoose.model("User", {
  email: String,
  password: String,
});

// Signup
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("Signup successful");
});

// Login
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.send("Login successful");
  else res.send("User not found");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});