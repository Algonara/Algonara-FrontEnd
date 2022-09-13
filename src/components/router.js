import React from "react";
import { Routes, Route } from "react-router-dom"

import Login from '../pages/login'
import Sign from '../pages/sign'
import Main from "../pages/main"
import Header from "./header";


export default function Router() {
    
    return (
        <>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </>
    );
}