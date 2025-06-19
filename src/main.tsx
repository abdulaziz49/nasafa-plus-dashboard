import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import PageDirectionController from "./controllers/utils/page_direction_controller.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <PageDirectionController>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PageDirectionController>
    </>,
)
