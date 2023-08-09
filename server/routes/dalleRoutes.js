import { Router } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
});

// route for generating image
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({
      success: true,
      photo: image,
    });
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      console.log("OpenAI API Error:", error.response.data);
      // Extract and log specific error details if available
      if (error.response.data.error && error.response.data.error.message) {
        console.log(
          "OpenAI API Error Message:",
          error.response.data.error.message
        );
      }
    } else {
      console.log("An error occurred. Please check the console for details.");
    }
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
