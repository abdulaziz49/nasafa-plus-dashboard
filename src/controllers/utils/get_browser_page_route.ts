// import {useLocation} from "react-router-dom";
//
// /**
//  * @type Function
//  * A function that returns the current route of the page
//  * @return string
//  */
// export default function getBrowserPageRoute(checkPath:string):boolean {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const location = useLocation(); // Get the current location object
//
//     // Check if the current path is the root path '/'
//     return location.pathname === '/';
//
// }

import { useLocation } from "react-router-dom";

/**
 * @type Function
 * A custom React Hook that checks if the current browser route matches a given path.
 *
 * @param {string} checkPath - The path string to compare against the current browser route.
 * @returns {boolean} True if the current browser route's pathname matches `checkPath`, false otherwise.
 */
export default function useBrowserPageRoute(checkPath: string): boolean {
    // Safely call useLocation inside a custom Hook
    // const location = useLocation();.

    // Compare the current pathname with the provided checkPath
    // return location.pathname === checkPath;
    return useLocation().pathname === checkPath;
}