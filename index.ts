import express from 'express';
import cors from 'cors';
import cookieParser  from "cookie-parser";
import postsRoute from './routes/postsRoute';
import usersRoute from "./routes/usersRoute";

export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}));


app.use('/api/users', usersRoute);
app.use("/api/posts", postsRoute);

const port = process.env.NODE_ENV === 'test' ? 4001 : 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

