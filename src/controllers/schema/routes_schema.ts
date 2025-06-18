import {DASHBOARD_ROUTE, USERS_GROUPS_MANAGEMENT_ROUTE, USERS_MANAGEMENT_ROUTE} from "../../routes/routes.ts";
import {
    DASHBOARD_NAME,
    PERMISSION_MANAGEMENT_NAME,
    USER_GROUP_MANAGEMENT_NAME,
    USER_MANAGEMENT_NAME, USER_PREMISSION_NAME
} from "../../routes/routes_names.ts";

const RoutesSchema = [
    {
        childs: [
            {
                routeName: DASHBOARD_NAME,
                routeURL: DASHBOARD_ROUTE,
            }
        ],
    },
    {
        routeName: USER_PREMISSION_NAME,
        childs: [
            {
                routeName: USER_GROUP_MANAGEMENT_NAME,
                routeURL: USERS_GROUPS_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_MANAGEMENT_NAME,
                routeURL: USERS_MANAGEMENT_ROUTE,
            },
            {
                routeName: PERMISSION_MANAGEMENT_NAME,
                routeURL: USERS_MANAGEMENT_ROUTE,
            },
        ],
    },
]

export default RoutesSchema