import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import UsersProvider from "./context/UsersProvider";

function MyRoutes() {
  return (
    <UsersProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </UsersProvider>
  );
}

export default MyRoutes;