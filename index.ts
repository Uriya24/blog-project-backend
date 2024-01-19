import express from 'express';
// import activityLogger from './middlewares/activityLogger';
import postsRoute from './routes/postsRoute';

export const app = express();
app.use(express.json());
// app.use(activityLogger);
app.use("/api/posts", postsRoute);

const port = 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

