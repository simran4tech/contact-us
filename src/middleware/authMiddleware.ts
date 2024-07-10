import { Request, Response, NextFunction } from 'express';
import { userModel } from '../models/userModel';


const adminUser: userModel = new userModel('admin', 'adminpassword', true);  //admin (user)

export function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
    
    const { username, password } = req.body;
    if (username === adminUser.email && password === adminUser.password) {
        next(); // User is authenticated as admin
    } else {
        res.status(401).json({ error: 'Unauthorized, need to Sign Up' });
    }
}
