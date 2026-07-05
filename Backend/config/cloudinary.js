import {v2 as cloudinary} from "cloudinary";

const connectCloudinary = async () => {

    cloundinary.config({
        cloud_name: process.env.CLOUNDINARY_NAME,
        api_key: process.env.CLOUNDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SE
    })

}

export default connectCloudinary;