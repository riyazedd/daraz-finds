import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';


const authUser = async (req, res) => {
	const {email,password}=req.body;

    const user= await User.findOne({email});
    
    if(user && (await user.matchPassword(password))){
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn: '2d'
        })

        //set jwt as http only cookie
        res.cookie('jwt',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV !='development',
            sameSite: 'strict',
            maxAge:2 * 24 * 60 * 60 * 1000
        })

        res.json({
            _id:user._id,
            username:user.username,
            email:user.email,
            isAdmin:user.isAdmin,
            token:token
        })
    }else{
        res.status(401).json({message:'Invalid email or password'})
    }
};

const logoutUser = async (req, res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0),
    });
	res.status(200).json({message:'logged out successfully'})
};

export {authUser,logoutUser}