import {Request, Response, NextFunction} from 'express';
import {OAuth2Client} from 'google-auth-library';
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

async function verify(req: Request, res: Response, next: NextFunction) {
    const oAuth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "postmessage");
    try {
        console.log("req.body.code: --> ", req.body.code)
        const getTokenResponse = await oAuth2Client.getToken(req.body.code);
        console.log("token: --> ", getTokenResponse.tokens.id_token)
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: getTokenResponse.tokens.id_token as string,
        });
        console.log("ticket: --> ", ticket);
        const userData = ticket.getPayload()!;
        req.body = new User(userData.sub, userData.email as string , userData.given_name as string, false);
        next()
    } catch (error) {
        res.status(401).send("Unauthorized user!");
    }
}

export default verify;
