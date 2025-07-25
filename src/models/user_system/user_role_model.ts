// import {object} from "yup";

export interface UserRole {
    id: number; // Unique ID for the role
    name: string;
    is_locked: boolean;
    description: string;
    permissions: string[]; // ID of the user who created this role
    created_at: string;
    updated_at: string;
}

export interface UserRolesState {
    mainStore: UserRole[];
    secondaryStore: UserRole[];
    fetching: boolean;
    adding: boolean;
    editing: boolean;
    deleting: boolean;
    searching: boolean;
    exporting: boolean;
    printing: boolean;
    error: string | null;
}
