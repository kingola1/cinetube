import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const Routess = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                element={<Home />}
            />
            <Route 
                path='/:category/search/:keyword'
                element={<Catalog />}
            />
            <Route 
                path='/:category/:id'
                element={<Detail />}
            />
            <Route 
                path='/:category'
                exact
                element={<Catalog />}
            />
        </Routes>
    </BrowserRouter>
  );
}

export default Routess;