import { createBrowserRouter } from "react-router-dom";
import InfinityScroll from "../features/infiniteScroll";
import FileExplorer from "../features/fileExplorer";
import App from "../App";
import Pagination from "../features/pagination";
import ProgressBarContainer from "../features/progressbar";
import PhoneAuthentication from "../features/otp";
import PasswordGenerator from "../features/password-generator";
import CounterApp from "../features/polyfills/customUseMemo";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: 'infinity-scroll',
        element: <InfinityScroll />
    },
    {
        path: 'file',
        element: <FileExplorer />
    },
    {
        path: 'pagination',
        element: <Pagination />
    },
    {
        path: 'progress-bar',
        element: <ProgressBarContainer />
    },
    { 
        path: 'phone-auth',
        element: <PhoneAuthentication />
    },
    { 
        path: 'password-generator',
        element: <PasswordGenerator />
    },
    {
        path: 'custom-use-memo',
        element: <CounterApp/>
    }
])