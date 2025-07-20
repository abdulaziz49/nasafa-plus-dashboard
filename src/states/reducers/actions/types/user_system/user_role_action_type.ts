// For CRUD operations (assuming these will also be API calls eventually)
import type { UserRole } from "../../../../../models/user_system/user_role_model";

export type UserRoleActionTypes =
    // For fetching user roles
    | { type: "FETCH_USER_ROLES_REQUEST" }
    | { type: "FETCH_USER_ROLES_SUCCESS"; payload: UserRole[] }
    | { type: "FETCH_USER_ROLES_FAILURE"; payload: string }

    // For adding user role
    | { type: "ADD_USER_ROLE_REQUEST" }
    | { type: "ADD_USER_ROLE_SUCCESS"; payload: UserRole }
    | { type: "ADD_USER_ROLE_FAILURE"; payload: string }

    // For editing user role
    | { type: "EDIT_USER_ROLE_REQUEST" }
    | { type: "EDIT_USER_ROLE_SUCCESS"; payload: UserRole }
    | { type: "EDIT_USER_ROLE_FAILURE"; payload: string }

    // For deleting user role
    | { type: "DELETE_USER_ROLE_REQUEST" }
    | { type: "DELETE_USER_ROLE_SUCCESS"; payload: number }
    | { type: "DELETE_USER_ROLE_FAILURE"; payload: string }

    // For searching user roles
    | { type: "SEARCH_USER_ROLES_REQUEST" }
    | { type: "SEARCH_USER_ROLES_SUCCESS"; payload: string }
    | { type: "SEARCH_USER_ROLES_FAILURE" };
