import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/GlobalStyles.css';
import Header from './components/layout/Header.tsx';
import MainPage from './pages/MainPage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>,
    
);