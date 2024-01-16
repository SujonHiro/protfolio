import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import WorkPages from './pages/WorkPages';
import AwardPage from './pages/AwardPage';
import EducationPage from './pages/EducationPage';
import ServicePage from './pages/ServicePage';
const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<WorkPages/>}/>
            <Route path="/education" element={<EducationPage/>}/>
            <Route path="/service" element={<ServicePage/>}/>
            <Route path="/awards" element={<AwardPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;