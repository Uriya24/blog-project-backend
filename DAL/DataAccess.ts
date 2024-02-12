export interface DataAccess<T> {
    add(t: T): Promise<number>,
    delete(id: number): Promise<void>,
    update(id: number, updateData: Partial<T>): Promise<void>,
    get(id: number): Promise<T>
    getAll(from?: number, to?: number, filterText?: string): Promise<Partial<T>[]>;
    getNumberOfPosts(): Promise<number>;
}