import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/pages/Home';
import UsersProvider from "./context/UsersProvider";

function MyRoutes() {
  return (
    <UsersProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Router>
    </UsersProvider>
  );
}

export default MyRoutes;
