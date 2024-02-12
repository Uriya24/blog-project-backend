class Post {
    id: number | undefined;
    title: string;
    content: string;
    date: Date;
    posted_by: string;

    constructor(title: string, content: string, date: Date, posted_by: string) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.posted_by = posted_by;
    }
}
export default Post;