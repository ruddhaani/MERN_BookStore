import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
import bookRoute from './route/book.route.js'
import userRouter from './route/user.route.js';
import cors from 'cors';

dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to MongoDB

try {
    mongoose.connect(URI , {});
    console.log("connected to mongodb")
} catch (error) {
    console.log('error : ' , error);
}

//defining routes

app.use("/book" , bookRoute);
app.use('/user' , userRouter);

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
});