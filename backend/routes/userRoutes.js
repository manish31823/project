import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import cors from "cors";
const app = express()
app.use(cors());


const router = express.Router();

router.post("/register", register);

// router.get("/register",(re,res)=>{
//     res.send("manish");
// });
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

export default router;
