import Post from "../models/Post";

export interface DataAccess<T> {
    add(t: T): Promise<void>,
    delete(id: number): Promise<void>,
    update(id: number, updateData: Partial<T>): Promise<void>,
    get(id: number): Promise<T>
    getAll(from?: Date, to?: Date, filterText?: string): Promise<Partial<T>[]>;
}