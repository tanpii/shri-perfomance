import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import './styles.css';
// import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
