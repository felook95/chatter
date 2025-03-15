import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './chat/Chat';
import Home from './core/Home';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:conversationId" element={<Chat />} />
    </Routes>
  );
};

export default MainRouter;
