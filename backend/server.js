const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas Connection (YOUR DETAILS ADDED)
mongoose.connect("mongodb+srv://roadbliss:Roadbliss%403820@cluster.ipc4vm2.mongodb.net/roadbliss?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

// ✅ Schema
const User = mongoose.model("User", {
  email: String,
  password: String,
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Signup
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send("Please fill all fields");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    const user = new User({ email, password });
    await user.save();

    res.send("Signup successful");
  } catch (err) {
    console.log(err);
    res.send("Error in signup");
  }
});

// ✅ Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.send("Login successful");
    } else {
      res.send("Invalid email or password");
    }
  } catch (err) {
    console.log(err);
    res.send("Error in login");
  }
});

// ✅ Port (Render compatible)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});