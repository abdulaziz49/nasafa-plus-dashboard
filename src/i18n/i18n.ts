// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import supportedLngs from "./supported_langs.ts";

// Add names for each locale to
// show the user in our locale
// switcher.

i18n
    // Backend for loading translations
    .use(Backend)
    // Language detector
    .use(LanguageDetector)
    // Add React bindings as a plugin.
    .use(initReactI18next)
    // Initialize the i18next instance.
    .init({
            // Config options

            // Specifies the default language (locale) used
            // when a user visits our site for the first time.
            lng: "ar",

            // Fallback locale used when a translation is
            // missing in the active locale.
            fallbackLng: "en",

            // Enables useful output in the browser’s
            // dev console.
            debug: true,
            // Define your namespaces. 'login' is a good start.
            ns: ['login'],

            // This is where i18next-http-backend takes over.
            // You don't put file paths in 'resources'.
            // Instead, the backend will construct the path based on
            // 'loadPath' in the Backend options.
            // Remove the 'resources' object if you are using http-backend
            // to load files.
            // resources: {
            //     ar: {
            //         login: './views/login' // This is incorrect
            //     },
            //     en: {
            //         login:'./en/login' // This is incorrect
            //     }
            // },

            backend: {
                // This is the path where your translation files are located.
                // i18next-http-backend will replace {{lng}} and {{ns}}
                // to construct the full path.
                // For example, if lng='ar' and ns='login', it might try to load:
                // './locales/ar/login.json' or './public/locales/ar/login.json'
                // Adjust this path based on where your translation JSON files actually reside.
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            },

            // Explicitly tell i18next our
            // supported locales.
            supportedLngs: Object.keys(supportedLngs),

            // Normally, we want `escapeValue: true` as it
            // ensures that i18next escapes any code in
            // translation messages, safeguarding against
            // XSS (cross-site scripting) attacks. However,
            // React does this escaping itself, so we turn
            // it off in i18next.
            interpolation: {
                escapeValue: false,
            },
        }
    );

export default i18n;