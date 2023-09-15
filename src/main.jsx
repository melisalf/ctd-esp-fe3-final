import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './Context/Context';




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </BrowserRouter>,
)



