import express from "express"
const router = express.Router();
import {protectRoute} from "../middleware/authMiddleware.js"
import { signin, login, logout } from '../controllers/userController.js';


router.post('/signup', signin);
router.post('/login', login);
router.post("/logout", logout)

router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({success:true,user:req.user})
})

export default router;