export default interface CachedAppStateModel<T> {
    cache: object[];
    mainStore: T[];
    secondaryStore: T[];
    caching: boolean;
    fetching: boolean;
    adding: boolean;
    editing: boolean;
    deleting: boolean;
    searching: boolean;
    exporting: boolean;
    printing: boolean;
    error: string | null;
}
