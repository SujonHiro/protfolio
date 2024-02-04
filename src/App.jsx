import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPages from './pages/ExpriencesPage';
import AwardPage from './pages/AwardPage';
import EducationPage from './pages/EducationPage';
import ServicePage from './pages/ServicePage';
const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/expriences" element={<WorkPages/>}/>
            <Route path="/education" element={<EducationPage/>}/>
            <Route path="/service" element={<ServicePage/>}/>
            <Route path="/awards" element={<AwardPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;