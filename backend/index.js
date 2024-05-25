import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to MongoDB

try {
    mongoose.connect(URI , {});
    console.log("connected to mongodb")
} catch (error) {
    console.log('error : ' , error);
}

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
});