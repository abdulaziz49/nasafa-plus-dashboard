// import {object} from "yup";

export interface UserRole {
    id: number; // Unique ID for the role
    roleName: string;
    description: string;
    userCreatorId: number; // ID of the user who created this role
}

export interface UserRolesState {
    userRoles: UserRole[];
    searchTerm: string;
}