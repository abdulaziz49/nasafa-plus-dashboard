export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    // Add other user properties you expect, e.g.,
    isAdmin?: boolean;
    roles: string[];
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}