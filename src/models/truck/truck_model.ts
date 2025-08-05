// import {object} from "yup";

export interface TruckModel {
    id: number; // Unique ID for the role
    // is_locked: boolean;
    code:string;
    plate_number: string
    description: string;
    status: string;
    // permissions: string[]; // ID of the user who created this role
    created_at: string;
    updated_at: string;
}

// export interface TruckTypeState {
//     mainStore: TruckType[];
//     secondaryStore: TruckType[];
//     fetching: boolean;
//     adding: boolean;
//     editing: boolean;
//     deleting: boolean;
//     searching: boolean;
//     exporting: boolean;
//     printing: boolean;
//     error: string | null;
// }
