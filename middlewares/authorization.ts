import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // Bypass authentication for testing environment
    if (process.env.NODE_ENV === 'test') {
        return next();
    }

    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                res.status(401).send("jwt unverified!");
            } else {
                const user = decoded as User;
                if (user.admin) {
                    next();
                } else {
                    res.status(403).send("User is not admin!");
                }
            }
        });
    } else {
        res.status(401).send("Unauthorized user!");
    }
}

export default isAdmin;