//extending the Request interface to include a user property

import User from "../models/User";

export {};

declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

