import type { TruckModel } from "../../models/truck/truck_model.ts";
import type { User } from "../../models/user_system/user_models.ts";
import type { UserRole } from "../../models/user_system/user_role_model.ts";

export type DataGridGenericType = UserRole | User | TruckModel;
