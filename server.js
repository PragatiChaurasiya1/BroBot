const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Chat route
app.post("/chat", (req, res) => {
  try {
    const question = (req.body.question || "").toLowerCase();
    let answer = "";

    if (question.includes("life")) {
      answer =
        "I was born and raised in Varanasi, where I completed my schooling. I prepared for IIT mainly through self-study and online resources during my drop year. I am currently a final-year BTech student at IIT ISM Dhanbad and I am actively looking for full-time roles to strengthen my skills and gain real-world experience.";
    } 
    else if (question.includes("superpower")) {
      answer =
        "My number one superpower is my ability to stay deeply focused and disciplined. When I commit to a task, I consistently work on it until it is completed properly.";
    } 
    else if (question.includes("grow")) {
      answer =
        "The top three areas I want to grow in are deeper task analysis and decision-making, leadership and management skills, and the ability to motivate myself and others in challenging situations.";
    } 
    else if (question.includes("misconception")) {
      answer =
        "People often think I am an introvert, but in reality, I am selective. I open up and share my thoughts once I feel comfortable and safe with the people around me.";
    } 
    else if (question.includes("boundary") || question.includes("limit")) {
      answer =
        "I push my boundaries by experimenting with different ways to solve problems, setting strict personal deadlines, and continuously learning and upgrading my skills.";
    } 
    else {
      answer =
        "You can ask me about my background, strengths, areas I want to grow in, or how I challenge myself.";
    }

    res.json({ answer });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      answer: "Something went wrong on the server. Please try again."
    });
  }
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
