import express from 'express';
import { signUp ,signin ,google ,signout} from '../controller/auth.controller.js';

const router = express.Router();

router.post("/signup" , signUp)
router.post("/signin" , signin)
router.post("/google" , google)
router.post("/signout" , signout)


export default router;