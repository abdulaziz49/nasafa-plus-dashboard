export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    is_activated: boolean;
    status: string;
    created_at: string;
    updated_at: string;
    status_text: string;
    force_change_password: boolean;
    last_login: string;
    password_changed_at: string;
    failed_login_attempts: number;
    locked_until: string | null;
    is_locked: boolean;
    remaining_lockout_time: string | null;
    needs_password_change: boolean;
    roles: users_roles_temp[];
    group: {
        id: number;
        group_name: string;
    };
    creator: {
        id: number;
        username: string;
        name: string;
    };
}

interface users_roles_temp {
    name: string;
    display_name: string;
}

export interface GeneralUserRoles {
    id: number;
    name: string;
}

export interface UsersState {
    mainStore: User[];
    secondaryStore: User[];
    fetching: boolean;
    adding: boolean;
    editing: boolean;
    deleting: boolean;
    searching: boolean;
    exporting: boolean;
    printing: boolean;
    error: string | null;
}

export const initialUserFormState: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    created_at: "",
    is_activated: false,
    status: "",
    updated_at: "",
    status_text: "",
    force_change_password: false,
    last_login: "",
    password_changed_at: "",
    failed_login_attempts: 0,
    locked_until: null,
    is_locked: false,
    remaining_lockout_time: null,
    needs_password_change: false,
    roles: [],
    group: {
        id: 0,
        group_name: "",
    },
    creator: {
        id: 0,
        username: "",
        name: "",
    },
};