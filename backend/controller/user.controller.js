import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
        try {
            const {fullName , email , password} = req.body;
            const user = await User.findOne({email});
            if(user){
                return res.status(400).json({message : "user exists!"});
            }

            const hashPassword = await bcryptjs.hash(password , 10);

            const createdUser = new User({
                fullName : fullName,
                email : email,
                password : hashPassword
            })

            await createdUser.save();

            res.status(201).json({message : "user created successfully" , user: {
                _id : createdUser._id,
                fullName : createdUser.fullName,
                email : createdUser.email
            }});
        } catch (error) {
            console.log('error : ' , error.message);
            res.status(500).json({message : "internal server error"})    
        }
};

export const login = async (req , res) => {
    try {
        const {email,password} = req.body;
        const user =await User.findOne({email});
        const isMatch = await bcryptjs.compare(password , user.password)

        if(!user || !isMatch){
            return res.status(400).json({message : "invalid username or password"});
        }else{
            return res.status(200).json({message : "login successfull" , user : {
                fullName : user.fullName,
                _id : user._id,
                email : user.email
            }});
        }
    } catch (error) {
        console.log("error" , error);
        res.status(500).json({message : "internal server error"});
    }
};