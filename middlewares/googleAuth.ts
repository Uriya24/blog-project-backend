import {Request, Response, NextFunction} from 'express';
import {OAuth2Client} from 'google-auth-library';
import User from "../models/User";
import dotenv from "dotenv";
dotenv.config();

//verifying the google user by the token that google sends us and creating a user object with the user details
const verify = async(req: Request, res: Response, next: NextFunction) => {
    const oAuth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "postmessage");
    try {
        const getTokenResponse = await oAuth2Client.getToken(req.body.code);
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: getTokenResponse.tokens.id_token as string,
        });
        const userData = ticket.getPayload()!;
        req.user = new User(userData.sub, userData.email as string , userData.name as string, userData.given_name as string, false);
        next()
    } catch (error) {
        res.status(401).send("Unauthorized google user!");
    }
}

export default verify;
