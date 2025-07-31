import type { IconsType } from "./icons_type.ts";

export const DashboardIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-${size} ${classes}`}
        >
            <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z" />
        </svg>
    );
};

// FIXME - Replaced user with system icon (gear icon)
export const SystemIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            className={`size-${size} ${classes}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <circle cx="10" cy="8" r="4" />
            {/* Gear (system) icon path data */}
            <path
                // fillRule="evenodd"
                d="M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26a6.963 6.963 0 0 1-.59-6.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                // clipRule="evenodd"
            />
        </svg>
    );
};

export const ContainerIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-${size} ${classes}`}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
                fillRule="evenodd"
                d="M3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const TruckIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        // <FaTruckFront className={`${classes}`}/>;
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-${size} ${classes}`}
        >
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>
    );
};

export const ContractIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-${size} ${classes}`}
        >
            <path
                fillRule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 18.375 9h-4.5A.75.75 0 0 1 13.125 8.25V3.75a3.75 3.75 0 0 0-3.75-3.75H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5H8.25Z"
                clipRule="evenodd"
            />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 1.5h4.125c1.035 0 1.875.84 1.875 1.875v4.5A5.25 5.25 0 0 0 12.97 1.816Z" />
        </svg>
    );
};

export const ClientIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        // <FaPeopleGroup className={`${classes}`} />;
        <svg
            className={`size-${size} ${classes}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/*// width="24" height="24" fill="currentColor" viewBox="0 0 24 24">*/}
            <path
                fillRule="evenodd"
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

// FIXME - Remove Maintenance Icon
export const MaintenanceIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        // <GrHostMaintenance className={`${classes}`} />;
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-${size} ${classes}`}
        >
            <path
                fillRule="evenodd"
                d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clipRule="evenodd"
            />
            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
            <path
                fillRule="evenodd"
                d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

// FIXME - Remove Setttings icon
export const SettingsIcon = ({ classes, size = 5 }: IconsType) => {
    // return <MdSettings className={` ${classes}`}/>
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-${size} ${classes}`}
        >
            <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const NotificationIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            className={`size-${size} ${classes}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/*// width="24" height="24" fill="currentColor" viewBox="0 0 24 24">*/}
            <path
                fillRule="evenodd"
                d="M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 0 1 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const LogoutIcon = ({ classes, size = 5 }: IconsType) => {
    // <MdLogout className={` ${classes}`}/>
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`rtl:rotate-y-180 size-${size} ${classes}`}
        >
            <path
                fillRule="evenodd"
                d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
};

// TODO - Add User Report Icon
export const UserReportIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className={`size-${size} ${classes}`} // Removed rtl:rotate-y-180 as it's not typically semantic for this icon
            aria-hidden="true"
        >
            {/* Path for a generic user (head and shoulders) */}
            <path
                fillRule="evenodd"
                d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"
                clipRule="evenodd"
            />

            {/* Path for an exclamation mark icon, positioned near the user's shoulder/head */}
            {/* <path
                d="M17.7 7.7a.75.75 0 0 0-1.1-1l-3 3a.75.75 0 0 0 1.1 1l3-3Z" // Top part of exclamation mark
                transform="translate(1, -2)" // Adjust position to place it on the user
            /> */}
            {/* <circle cx="17" cy="14.5" r="0.75" /> Dot of exclamation mark */}
        </svg>
    );
};

// TODO - Add Drivers Icon
export const DriverIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            // The `rtl:rotate-y-180` is kept as it might be a global styling convention,
            // but might not be visually necessary for a driver icon unless its meaning
            // needs to be flipped for RTL languages. You might consider removing it
            // if the icon's direction isn't semantic.
            className={`size-${size} ${classes}`}
        >
            {/* Path for a person's head and upper body */}
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z" />
        </svg>
    );
};

// TODO - Add Supervisor Icon
export const SupervisorIcon = ({ classes, size = 5 }: IconsType) => {
    return (
        <svg
            className={`size-${size} ${classes}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            {/* Base person icon (similar to a standard user icon) */}
            <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z" />
            <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z" />

            {/* Small star/badge overlay to signify supervisor status */}
            {/* This star is positioned to be on the person's upper body/shoulder area */}
            <path
                d="M19.7 7.3c-.2-.5-.7-.8-1.2-.8-.6 0-1.1.2-1.5.7l-1.3 1.3-1.3-1.3c-.4-.4-1-.7-1.5-.7-.6 0-1.1.3-1.4.8-.4.5-.4 1.1-.1 1.6l2 2c.2.2.5.3.8.3s.6-.1.8-.3l2-2c.3-.5.3-1.1-.1-1.6Z"
                transform="translate(-3, 1)"
                fill="currentColor" // Adjust translate to position the star
            />
        </svg>
    );
};
