class Post {
    id: number | undefined;
    title: string;
    content: string;
    date: Date;

    constructor(title: string, content: string, date: Date) {
        // this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}
export default Post;