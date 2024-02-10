import User from "../models/User";

interface UserResponse {
    user: User,
    message: string
}

export default UserResponse;