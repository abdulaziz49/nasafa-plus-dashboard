import type {UserRole, UserRolesState} from "../../models/users/user_role_model.ts";
import AppAxios, {getAuthAxiosConfig} from "../../utils/app_axios.ts";

export const userRoleInitialState: UserRolesState = {
    userRoles: [
        {id: 1, roleName: 'Admin', description: 'Full access to the system', userCreatorId: 101},
        {id: 2, roleName: 'Editor', description: 'Can create and edit content', userCreatorId: 102},
        {id: 3, roleName: 'Viewer', description: 'Can view content only', userCreatorId: 101},
        {id: 4, roleName: 'Moderator', description: 'Manages user comments and forums', userCreatorId: 103},
    ],
    searchTerm: '',
};

type UserRolesAction =
    | { type: 'GET_ROLE'; payload: { token: string, id: number } }
    | { type: 'ADD_ROLE'; payload: Omit<UserRole, 'id'> } // Omit 'id' because it will be generated
    | { type: 'EDIT_ROLE'; payload: UserRole }
    | { type: 'DELETE_ROLE'; payload: { id: number } }
    | { type: 'SET_SEARCH_TERM'; payload: { term: string } };

export default function UserRoleReducer(state: UserRolesState, action: UserRolesAction): UserRolesState {
    switch (action.type) {
        case 'GET_ROLE': {
            AppAxios.get('roles', getAuthAxiosConfig(action.payload.token)).then((response) => console.log(`roles: ${response.data}`)).catch((error) => console.error(`error roles: ${error.message}`))
            return state
        }

        case 'ADD_ROLE': {
            // Generate a simple unique ID (for a real app, use a robust ID generator like uuid)
            const newRole: UserRole = {
                ...action.payload,
                id: Date.now(), // Simple unique ID
            };
            return {
                ...state,
                userRoles: [...state.userRoles, newRole],
            };
        }
        case 'EDIT_ROLE':
            return {
                ...state,
                userRoles: state.userRoles.map((role) =>
                    role.id === action.payload.id ? action.payload : role
                ),
            };

        case 'DELETE_ROLE':
            return {
                ...state,
                userRoles: state.userRoles.filter((role) => action.payload.id !== role.id),
            };

        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload.term,
            };

        default:
            // It's good practice to throw an error for unknown action types
            throw new Error(`Unhandled action type: ${(action as UserRolesAction).type}`);
    }
}