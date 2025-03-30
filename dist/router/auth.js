"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_config_1 = require("../util/db-config");
const router = (0, express_1.Router)();
const users = db_config_1.db1.collection("users");
router.post('/set-user', (req, res) => {
    const user = req.body.user;
    const result = users.insertOne(user);
    res.status(200).json({ message: "User added successfully", user: result });
});
router.get("/get-user", (req, res) => {
    const id = req.body.userId;
    const result = users.findOne({ userId: id });
    if (!result)
        res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User found", user: result });
});
router.post("/check-user", (req, res) => {
    const { email, password } = req.body;
    const result = users.findOne({ email: email, password: password });
    if (!result)
        res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User found", user: result });
});
exports.default = router;
