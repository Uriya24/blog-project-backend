class User {
    id: string;
    email: string;
    name: string;
    first_name: string;
    admin: boolean;

    constructor(id: string, email: string, name: string, first_name: string, admin: boolean) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.first_name = first_name;
        this.admin = admin;
    }
}
export default User;