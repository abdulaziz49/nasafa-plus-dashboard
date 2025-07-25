import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n/i18n.ts";
import { I18nextProvider } from "react-i18next";
import { Slide, ToastContainer } from "react-toastify";
// import {Provider} from "react-redux";
// import {store} from "./states/store.ts";
// import {StrictMode} from "react";

createRoot(document.getElementById("root")!).render(
    <>
        {/*<Provider store={store}>*/}
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
        <ToastContainer transition={Slide} />
        {/*</Provider>*/}
    </>
);
