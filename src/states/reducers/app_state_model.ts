export default interface AppStateModel<T> {
    cache: object[];        // store ui data like select input data
    mainStore: T[];         // data coming from the server and showed on the datagrid
    secondaryStore: T[];    // helps in the search process
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
