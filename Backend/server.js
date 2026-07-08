import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

dotenv.config();

//App configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();



// middlewares
app.use(express.json());
app.use(cors());


//api endpoints
app.use("/api/user", require("./routes/UserRoute.js").default);
app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log(`Server running on port ${port}`))