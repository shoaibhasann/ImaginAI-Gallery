# ImaginAI-Gallery

Welcome to ImaginAI Gallery! This project showcases a stunning collection of AI-generated images using the DALL-E model. Users can explore a wide range of imaginative artworks, generate their own unique images using prompts, and contribute to the community by sharing their creations.

## Live Preview

Visit the [ImaginAI Gallery Live Preview](https://imagin-ai-gallery-a2dts4qx3-shoaibhasann.vercel.app/) to experience the project in action!


## Features

- Browse through a diverse collection of AI-generated images.
- Create your own unique images by providing prompts to the DALL-E model.
- Share your generated images with the community.
- Engage with a creative space where AI meets art.

## Technologies Used

### Frontend

- React: JavaScript library for building user interfaces.
- React Router: Library for routing and navigation in a React application.
- FileSaver: Utility to save files from the browser.

### Backend

- Express: Web application framework for Node.js.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- MongoDB: NoSQL database for storing application data.
- Cloudinary: Cloud-based image and video management service.

## Getting Started

1. Clone the repository: `git clone https://github.com/shoaibhasann/ImaginAI-Gallery.git`
2. Install frontend dependencies: `cd client && npm install`
3. Install backend dependencies: `cd server && npm install`
4. Create a `.env` file in the backend directory and add your environment variables:

   OPENAI_API_KEY=your_openai_api_key
   MONGO_URI=your_mongodb_uri
   PORT=8080
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret


5. Start the backend server: `cd server && npm start`
6. Start the frontend development server: `cd client && npm run dev`

## How to Use

1. Visit the website to explore the gallery of AI-generated images.
2. Click on any image to view its details and associated prompt.
3. Create your own image by providing a prompt in the "Generate Image" section.
4. Share your generated image with the community by saving and posting it.

## Project Structure

- `frontend`: Contains the React frontend application.
- `backend`: Contains the Express backend server and database models.
- `constants.js`: Includes arrays of prompts for generating different types of images.
- `utils.js`: Provides utility functions for generating prompts and downloading images.

## Acknowledgements

- This project was inspired by the capabilities of the DALL-E AI model by OpenAI.
- Special thanks to the various libraries and technologies used to make this project possible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
