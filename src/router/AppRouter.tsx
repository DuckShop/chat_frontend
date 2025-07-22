import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'
// import SkillMatch from '../pages/SkillMatch';

import NotFound from '../pages/NotFound';
import Chat from '../pages/Chat';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Chat/>
          </MainLayout>
        } />

        <Route path="/404" element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        } />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
