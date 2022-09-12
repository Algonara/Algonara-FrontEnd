import React from "react";
import { Routes, Route } from "react-router-dom"

import Login from '../pages/login'
import Sign from '../pages/sign'
import Main from "../pages/main"

export default function Router() {
    
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </>
    );
}