export default interface AppStateModel<T> {
    mainStore: T[];
    secondaryStore: T[];
    fetching: boolean;
    adding: boolean;
    editing: boolean;
    deleting: boolean;
    searching: boolean;
    exporting: boolean;
    printing: boolean;
    error: string | null;
}
