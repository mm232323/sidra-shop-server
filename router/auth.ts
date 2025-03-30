import { RequestHandler, Router } from "express";
import { db1 } from "../util/db-config";
const router = Router();
const users = db1.collection("users")
router.post('/set-user', (req,res) => {
    const user = req.body.user;
    const result = users.insertOne(user)
    res.status(200).json({message:"User added successfully",user:result})
})

router.get("/get-user", (req,res) => {
    const id = req.body.userId;
    const result = users.findOne({userId:id})
    if(!result) res.status(404).json({message:"User not found"})
    res.status(200).json({message:"User found",user:result})
})

router.post("/check-user", (req,res) => {
    const {email,password} = req.body;
    const result = users.findOne({email:email,password:password})
    if(!result) res.status(404).json({message:"User not found"})
    res.status(200).json({message:"User found",user:result})
})

export default router