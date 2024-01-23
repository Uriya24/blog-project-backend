import express from 'express';
import cors from 'cors';
// import activityLogger from './middlewares/activityLogger';
import postsRoute from './routes/postsRoute';

export const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000'
}));
// app.use(activityLogger);
app.use("/api/posts", postsRoute);

const port = 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

