const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const port = 3000;

const Signup = require("./Models/Signup");

// MongoDB connection
mongoose
  .connect("mongodb+srv://muskan:anam8433@cluster0.xx6tb.mongodb.net/")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// ✅ User Signup Route
app.post("/signup", async (req, res) => {
  try {
    const signup = await Signup.create(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user: signup
    });
    console.log("User registered successfully");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Failed to register user");
  }
});

// ✅ User Signin Route (using rollno and password)
app.post("/signin", async (req, res) => {
  const { rollno, password } = req.body;

  try {
    const user = await Signup.findOne({ rollno });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password !== password) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).json({
      message: "Signin successful",
      user: {
        name: user.name,
        rollno: user.rollno,
        email: user.email,
        branch: user.branch,
        section: user.section
      }
    });

    console.log("User signed in successfully");

  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).send("Failed to signin");
  }
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
