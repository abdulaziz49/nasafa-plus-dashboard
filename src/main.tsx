import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
// import PageDirectionController from "./controllers/utils/page_direction_controller.tsx";
import i18n from  "./i18n/i18n.ts"
import {I18nextProvider} from "react-i18next";

createRoot(document.getElementById('root')!).render(
    <>
        {/*<PageDirectionController>*/}
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </I18nextProvider>
        {/*</PageDirectionController>*/}
    </>,
)
