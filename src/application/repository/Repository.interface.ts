export interface AddRepository<T> {
    add: (user: T) => Promise<void>
}

export interface GetByEmail<T> {
    getByEmail: (email: string) => Promise<T | null>
}

export interface GetByTokenRepository<T> {
    getByToken(token: string): Promise<T | null>
}
