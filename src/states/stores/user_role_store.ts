// states/stores/user_roles_store.ts
import {create} from 'zustand';
import type {UserRole, UserRolesState} from "../../models/users/user_role_model.ts"; // Assuming your model is here

interface UserRolesActions {
    // Actions to update state
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setUserRoles: (roles: UserRole[]) => void;
    setSearchTerm: (term: string) => void;

    // CRUD actions that modify the local store state (after API success)
    addRole: (role: UserRole) => void;
    editRole: (role: UserRole) => void;
    deleteRole: (id: number) => void;
}

// Combine state and actions into one type for the store
type UserRolesStore = UserRolesState & UserRolesActions;

export const useUserRolesStore = create<UserRolesStore>((set) => ({
    // Initial State
    mainStore: [],
    fetching: false,
    error: null,
    searchTerm: '',

    // Actions
    setLoading: (loading) => set({loading}),
    setError: (error) => set({error}),
    setUserRoles: (roles) => set({userRoles: roles}),
    setSearchTerm: (term) => set({searchTerm: term}),

    addRole: (role) => set((state) => ({userRoles: [...state.userRoles, role]})),
    editRole: (role) =>
        set((state) => ({
            userRoles: state.userRoles.map((r) => (r.id === role.id ? role : r)),
        })),
    deleteRole: (id) =>
        set((state) => ({
            userRoles: state.userRoles.filter((r) => r.id !== id),
        })),
}));