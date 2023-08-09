import { Router } from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import postModel from "../models/post.js";

dotenv.config();

const router = Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// get all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await postModel.find({});

    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

// create a post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    if (!photoUrl || !photoUrl.url) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload photo to Cloudinary.",
      });
    }

    const newPost = await postModel.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    console.error("Error uploading photo:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while creating the post.",
    });
  }
});


export default router;
