// // src/features/auth/authStore.ts
// import {create} from 'zustand';
// import {createJSONStorage, devtools, persist} from 'zustand/middleware'; // Optional: for DevTools and persistence
// // import AppAxios, {getAxiosHeaderJson} from "../../utils/app_axios.ts";
//
// // Define the state shape for your auth store
// interface UserSettingsState {
//     theme: "dark" | "light" | "system";
//     isDark: boolean;
//     isRTL: boolean;
//     lang: string;
//     setTheme: (value: "dark" | "light" | "system") => Promise<void>;
//     // fetchUser: () => Promise<void>;
//     setLang: (value: "ar" | "en") => Promise<void>;
//     // getTheme:()=>boolean
// }
//
// // --- Zustand Store ---
// const useUserSettingsStore = create<UserSettingsState>()(
//     // Optional: devtools for browser extension, persist for localStorage
//     devtools(
//         persist(
//             (set) => ({ // `set` to update state, `get` to read current state
//                 // Initial State
//                 theme: "system",
//                 isDark: false,
//                 lang: "ar",
//                 isRTL: true,
//
//                 setTheme: async (value) => {
//                     switch (value) {
//                         case "light": {
//                             set({
//                                 theme: value, // 'value' will be "light" here
//                                 isDark: false
//                             });
//                             break; // Stop execution here
//                         }
//                         case "dark": {
//                             set({
//                                 theme: value, // 'value' will be "dark" here
//                                 isDark: true
//                             });
//                             break; // Stop execution here
//                         }
//                         default: { // This case handles any other value, e.g., "system"
//                             const temp = window.matchMedia('(prefers-color-scheme: dark)').matches;
//                             set({
//                                 theme: value, // 'value' will be whatever it was, e.g., "system"
//                                 isDark: temp
//                             });
//                             // No break needed here as it's the last case
//                         }
//                     }
//                 },
//
//                 setLang: async (value) => {
//                     document.dir = value === "ar" ? "rtl" : "ltr"
//                     set({
//                         lang: value,
//                         isRTL: document.dir === "rtl",
//                     });
//                 },
//             }),
//             {
//                 name: "user-settings-storage",
//                 partialize: (state) => ({
//                     theme: state.theme,
//                     isDark: state.isDark,
//                     isRTL: state.isRTL,
//                     lang: state.lang,
//                 }),
//                 storage: createJSONStorage(() => localStorage)
//             }
//         )
//     )
// );
//
// export default useUserSettingsStore

// src/features/auth/authStore.ts
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
// import {useTranslation} from "react-i18next";
import i18n from "../../i18n/i18n.ts";

// Define the state shape for your auth store
interface UserSettingsState {
    theme: "dark" | "light" | "system";
    isDark: boolean; // Re-added: Will be updated by setTheme
    isRTL: boolean;   // Re-added: Will be updated by setLang
    lang: "ar" | "en";
    setTheme: (value: "dark" | "light" | "system") => void;
    setLang: (value: "ar" | "en") => void;
}

// Helper to safely determine initial system dark mode for client-side
const getSystemDarkMode = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode on server or if window.matchMedia is unavailable
};

// Helper to safely determine initial document direction for client-side
const getInitialDocumentDir = () => {
    if (typeof document !== 'undefined') {
        return document.dir === "rtl";
    }
    return false; // Default to LTR on server
};

// Helper to safely set document direction on client-side
const setDocumentDir = (isRTL: boolean) => {
    if (typeof document !== 'undefined') {
        document.dir = isRTL ? "rtl" : "ltr";
    }
};

const setDocumentLang = (value: string) => {
    i18n.changeLanguage(value)
}


const useUserSettingsStore = create<UserSettingsState>()(
    devtools(
        persist(
            (set) => ({ // `get` is useful for reading current state in actions
                // Initial State
                theme: "system", // Start with 'system' as default
                lang: "ar",      // Default language
                isDark: getSystemDarkMode(), // Initial `isDark` based on system preference
                isRTL: getInitialDocumentDir(), // Initial `isRTL` based on current document.dir

                setTheme: (value) => {
                    let newIsDark: boolean;
                    if (value === "light") {
                        newIsDark = false;
                    } else if (value === "dark") {
                        newIsDark = true;
                    } else { // value is "system" or anything else
                        newIsDark = getSystemDarkMode(); // Safely get system preference
                    }

                    set({
                        theme: value,
                        isDark: newIsDark // Set isDark here
                    });
                },

                setLang: (value) => {
                    i18n.changeLanguage(value)
                    const newIsRTL = value === "ar";
                    set({
                        lang: value,
                        isRTL: newIsRTL, // Set isRTL here
                    });
                    setDocumentDir(newIsRTL); // Apply document direction side effect
                },
            }),
            {
                name: "user-settings-storage",
                // Partialize only state that needs to be persisted
                partialize: (state) => ({
                    theme: state.theme,
                    isDark: state.isDark, // Re-added to persist
                    isRTL: state.isRTL,   // Re-added to persist
                    lang: state.lang,
                }),
                storage: createJSONStorage(() => localStorage),
                // Important: onRehydrate to recalculate derived state after hydration
                onRehydrateStorage: () => (state) => {
                    if (state) {
                        // Re-evaluate isDark if the persisted theme was 'system'
                        // This ensures `isDark` is correct on rehydration for 'system'
                        if (state.theme === "system") {
                            state.isDark = getSystemDarkMode();
                        }
                        // Reapply document.dir based on rehydrated isRTL
                        setDocumentDir(state.isRTL);
                        // Reapply language based on rehydrated lang
                        setDocumentLang(state.lang)
                    }
                },
            }
        )
    )
);

// --- Handle initial setup and dynamic system theme listening ---
// This part must also be guarded for SSR. It should only run on the client.
if (typeof window !== 'undefined') {
    // 1. Initial setup when the store is first created (or rehydrated) on the client
    // This ensures document.dir is set immediately based on the store's initial/rehydrated isRTL
    setDocumentDir(useUserSettingsStore.getState().isRTL);

    // 2. Listener for dynamic system theme changes (if 'theme' is 'system')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemThemePreference = () => {
        const {theme, setTheme} = useUserSettingsStore.getState();
        if (theme === "system") {
            // If the user's preference is 'system', re-call setTheme("system")
            // to update isDark based on the new system preference
            setTheme("system");
        }
    };

    // Add listener for changes
    mediaQuery.addEventListener('change', updateSystemThemePreference);

    // Cleanup: This listener will persist as long as the module is loaded.
    // For a global settings store, this is usually acceptable.
}

export default useUserSettingsStore;