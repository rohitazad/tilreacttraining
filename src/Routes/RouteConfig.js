import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageContainer from '../Container/HomePage';
import AboutPageContainer from '../Container/AboutPageContainer';
import ContactPageContainer from '../Container/ContactPageContainer';
import HeaderComponents from '../Components/Header';
import FooterComponents from '../Components/Footer';
import TodoApp from '../Container/TODO';
const RouteConfig = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/about" element={<AboutPageContainer />} />
          <Route path="/contact" element={<ContactPageContainer />} />

          <Route path="/todo" element={<TodoApp />} />
        </Routes>
        <FooterComponents />
      </BrowserRouter>
    </>
  );
};

export default RouteConfig;
