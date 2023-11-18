// Import necessary modules and libraries.
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

// Load environment variables from a .env file.
dotenv.config();

// Create an Express router to handle API routes.
const router = express.Router();

// Route to handle text completion requests.
router.post("/text", async (req, res) => {
  try {
    // Extract text and activeChatId from the request body.
    const { text, activeChatId } = req.body;

    // Make a request to OpenAI's text completion API.
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Specifies the model to use.
      prompt: text, // The text prompt to complete.
      temperature: 0.5, // Controls randomness.
      max_tokens: 2048, // Maximum number of tokens to generate.
      top_p: 1, // Nucleus sampling parameter.
      frequency_penalty: 0.5, // Reduces repetition.
      presence_penalty: 0, // No effect on first-time topics.
    });

    // Post the response from OpenAI to the chat engine.
    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].text },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID, // Environment variable for project ID.
          "User-Name": process.env.BOT_USER_NAME, // Environment variable for bot username.
          "User-Secret": process.env.BOT_USER_SECRET, // Environment variable for bot user secret.
        },
      }
    );

    // Send the generated text back to the client.
    res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    // Log and return the error if one occurs.
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

// Route to handle code completion requests.
router.post("/code", async (req, res) => {
  try {
    // Similar structure to the "/text" route, but uses a different model.
    // This model is specifically tailored for generating code.
    // Rest of the code is similar to the "/text" route.
  } catch (error) {
    // Error handling is similar to the "/text" route.
  }
});

// Route to assist in completing a thought.
router.post("/assist", async (req, res) => {
  try {
    // This route is similar to the "/text" route, but the prompt is prefixed with
    // "Finish my thought:" to guide the AI's response.
  } catch (error) {
    // Error handling is similar to the "/text" route.
  }
});

// Export the router for use in other parts of the application.
export default router;
