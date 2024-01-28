class User {
    id: string;
    email: string;
    name: string;
    admin: boolean;

    constructor(id: string, email: string, name: string, admin: boolean) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.admin = admin;
    }
}
export default User;