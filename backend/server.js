const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB (fixed)
mongoose.connect("mongodb+srv://roadbliss:Roadbliss@3820@cluster.ipc4vm2.mongodb.net/roadbliss");

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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});