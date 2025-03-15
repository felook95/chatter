import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './chat/Chat';
import Home from './core/Home';
import AuthRedirect from './auth/AuthRedirect';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth_callback" element={<AuthRedirect />} />
      <Route path="/chat/:conversationId" element={<Chat />} />
    </Routes>
  );
};

export default MainRouter;
