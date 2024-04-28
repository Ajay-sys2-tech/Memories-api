import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import 'dotenv/config'

const app = express();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());


app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://kumarajaymdp700:4MW2qyjyOeIRfbSz@cluster0.7qvsnxy.mongodb.net/SocialMedia?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        console.log(`Server connected to MongoDB...`);
    })
    .catch(() => console.log(`Server is not connected to MongoDB...`));

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
})