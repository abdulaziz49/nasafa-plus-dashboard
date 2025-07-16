// For CRUD operations (assuming these will also be API calls eventually)
export type DataActionTypes<T> =
    // For fetching data
    | { type: 'FETCH_DATA_REQUEST' }
    | { type: 'FETCH_DATA_SUCCESS'; payload: T[] }
    | { type: 'FETCH_DATA_FAILURE'; payload: string }

    // For adding data
    | { type: 'ADD_DATA_REQUEST' }
    | { type: 'ADD_DATA_SUCCESS'; payload: T } 
    | { type: 'ADD_DATA_FAILURE'; payload: string } 
    
    // For editing data
    | { type: 'EDIT_DATA_REQUEST' }
    | { type: 'EDIT_DATA_SUCCESS'; payload: T }
    | { type: 'EDIT_DATA_FAILURE'; payload: string } 
    
    // For deleting data
    | { type: 'DELETE_DATA_REQUEST' }
    | { type: 'DELETE_DATA_SUCCESS'; payload: { id: number } }
    | { type: 'DELETE_DATA_FAILURE'; payload: string } 

    // For searching data
    | { type: 'SEARCH_DATA_REQUEST'; payload: { term: string } }
    | { type: 'SEARCH_DATA_SUCCESS'; payload: T[] }
    | { type: 'SEARCH_DATA_FAILURE'; payload: string };