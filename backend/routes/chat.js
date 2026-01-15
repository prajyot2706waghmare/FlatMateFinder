import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express"
dotenv.config();
//  model="gemini-3-flash-preview",
const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });


const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: `
You are a chatbot for a Roommate Finder application.

Your role:
- Help users find compatible roommates
- Answer questions related to roommates, rentals, locations, budgets, preferences
- Give advice on co-living, house rules, safety, and agreements
- Keep answers short, clear, and practical
- If a question is unrelated, gently redirect it toward roommate-finding context
        `,
        },
      ],
    },
  ],
});



router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const result = await chat.sendMessage(message);
    // const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini chatbot error" });
  }
});

export default router;
