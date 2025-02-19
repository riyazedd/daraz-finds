import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

//protect routes
const protect = async(req,res)=>{
    let token;

    //read jwt from cookie
    token=req.cookies.jwt;

    if(token){
        try{
            const decoded=jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        }catch(err){
            res.status(401).json({message:'not authorized! token failed'})
        }
    }else{
        res.status(401).json({message:'not authorized! no token'})
    }
}

//admin middleware
const admin = (req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
         res.status(401).json({message:'not authorizedas admin'})
    }
}

export {protect,admin};