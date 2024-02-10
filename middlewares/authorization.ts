import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                console.log("jwt unverified!");
                res.status(401).send("jwt unverified!");
            } else {
                const user = decoded as User;
                if (user.admin) {
                    console.log("User is admin!");
                    next();
                } else {
                    console.log("User is not admin!");
                    res.status(403).send("User is not admin!");
                }
            }
        });
    } else {
        console.log("Unauthorized user!");
        res.status(401).send("Unauthorized user!");
    }
}

export default isAdmin;