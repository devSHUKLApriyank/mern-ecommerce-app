import {v2 as cloudinary} from "cloudinary";

const connectCloudinary = async () => {

        console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
    console.log("API Key:", process.env.CLOUDINARY_API_KEY);
    console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Loaded" : "MISSING");
    console.log("API Secret length:", process.env.CLOUDINARY_API_SECRET.length);
    console.log("Config check:", cloudinary.config())

   cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME?.trim(),
    api_key: process.env.CLOUDINARY_API_KEY?.trim(),
    api_secret: process.env.CLOUDINARY_API_SECRET?.trim(),
});

}


export default connectCloudinary;