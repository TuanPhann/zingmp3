import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './componentGlobal/GlobalStyle';
import DataSongs from './data/songs.json';
import { Songs } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Songs.Provider value={DataSongs}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </Songs.Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
