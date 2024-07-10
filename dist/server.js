"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const contactUsRoutes_1 = __importDefault(require("./routes/contactUsRoutes"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/auth', authRoutes_1.default);
app.use('/api', contactUsRoutes_1.default); // Use '/api' prefix for contact us routes
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
