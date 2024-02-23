import { createBrowserRouter } from "react-router-dom";
import InfinityScroll from "../features/infiniteScroll";
import FileExplorer from "../features/fileExplorer";
import App from "../App";
import Pagination from "../features/pagination";
import ProgressBarContainer from "../features/progressbar";
import PhoneAuthentication from "../features/otp";
import PasswordGenerator from "../features/password-generator";
import CounterApp from "../features/polyfills/customUseMemo";
import GridSequence from "../features/grid-sequence";
import JobBoard from "../features/job-board";
import LikedButton from "../features/like-button";
import EmiCalculator from "../features/emi-calculator";
import ContactList from "../features/cars24/contact-list";
import ContactManager from "../features/cars24";
import AddProgressBar from "../features/add-progressbar";


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
        path: 'file-explorer',
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
    },
    {
        path: 'grid-sequence',
        element: <GridSequence/>
    },
    {
        path: 'job-board',
        element: <JobBoard/>
    },
    {
        path: 'like-button',
        element: <LikedButton/>
    },
    {
        path: 'emi-calculator',
        element: <EmiCalculator/>
    },
    {
        path: 'cars24',
        element: <ContactManager />
    },
    {
        path: 'add-progressbar',
        element: <AddProgressBar />
    },

])