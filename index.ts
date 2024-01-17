import express from 'express';
// import activityLogger from './middlewares/activityLogger';
import postsRoute from './routes/postsRoute';

const app = express();
app.use(express.json());
// app.use(activityLogger);
const port = 4000;

app.use("/api/posts", postsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})