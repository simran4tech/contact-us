"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdmin = authenticateAdmin;
const userModel_1 = require("../models/userModel");
const adminUser = new userModel_1.userModel('admin', 'adminpassword', true); //admin (user)
function authenticateAdmin(req, res, next) {
    const { username, password } = req.body;
    if (username === adminUser.email && password === adminUser.password) {
        next(); // User is authenticated as admin
    }
    else {
        res.status(401).json({ error: 'Unauthorized, need to Sign Up' });
    }
}
