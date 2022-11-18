import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "features/navbar";

import { Home, Orders, Profile } from "./pages";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
