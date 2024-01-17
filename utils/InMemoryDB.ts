// import Post from '../models/Post';
//
// class InMemoryDB {
//     private static instance: InMemoryDB;
//     private posts: Map<number, Post> = new Map();
//
//     private constructor() {
//     }
//
//     public static getInstance(): InMemoryDB {
//         if (!InMemoryDB.instance) {
//             InMemoryDB.instance = new InMemoryDB();
//         }
//         return InMemoryDB.instance;
//     }
//
//
//     // Post Methods
//     addPost(post: Post) {
//         this.posts.set(post.id, post);
//     }
//
//     getPost(id: number): Post | undefined {
//         return this.posts.get(id);
//     }
//
//     getAllPosts(from?: Date, to?: Date, filterText?: string): Partial<Post>[] {
//         let allPostsArr = Array.from(this.posts.values());
//         if (from !== undefined && to !== undefined) {
//             allPostsArr = allPostsArr.slice(from, to);
//         }
//         if (filterText) {
//             allPostsArr = allPostsArr.filter(post =>
//                 post.title.toLowerCase().includes(filterText.toLowerCase())
//             );
//         }
//         return allPostsArr.map(({id, title, date}) => ({id, title, date}));
//         // return allPostsArr.map((post) => ({ id: post.id, title: post.title, date: post.date }));
//     }
//
//     updatePost(id: number, postData: Partial<Post>) {
//         let post = this.posts.get(id);
//         if (post) {
//             // Update attributes of the post
//             post = {...post, ...postData};
//             this.posts.set(id, post);
//         }
//     }
//
//     deletePost(id: number) {
//         this.posts.delete(id);
//     }
// }
//
// export default InMemoryDB;