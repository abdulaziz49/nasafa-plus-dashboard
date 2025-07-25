export interface Auth {
    id: number;
    name: string;
    username: string;
    email: string;
    permissions: string[];
    roles: object[];
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthState {
    authUser: Auth;
    isAuthenticated: boolean;
    isLoading: boolean;
    token: string;
    error: string | null;
}

export const emptyUser: Auth = {
    id: 0,
    name: "",
    email: "",
    permissions: [],
    roles: [],
    username: "",
};
