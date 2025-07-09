export interface UserGroup {
    id: number;
    group_name: string;
    group_decription: string;
    user_creator: string;
}

export interface UserGroupState {
    // 'search' will hold results of a specific search query
    search: UserGroup[] | null;
    // 'groups' will hold the main list of all user groups
    groups: UserGroup[] | null;
    isSearching: boolean;
    isLoading: boolean; // For overall operations (fetch all, add, edit, delete)
    error: string | null;
}