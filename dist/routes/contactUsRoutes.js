"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactUsModel_1 = require("../models/contactUsModel");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/contact-us', authMiddleware_1.authenticateAdmin, (req, res) => {
    const { name, email, mobile, subject, description } = req.body;
    const newcontactUs = new contactUsModel_1.contactUsModel(name, email, mobile, subject, description);
    res.json({ message: 'Your ticket summited successfully' });
});
exports.default = router;
