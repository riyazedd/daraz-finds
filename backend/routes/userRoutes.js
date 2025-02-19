import express from "express"
const router = express.Router();
import { authUser,logoutUser } from "../controller/userController.js";

router.post('/login',authUser);
router.post('/logout',logoutUser);

export default router;