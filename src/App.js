import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layouts/defaultLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<>this is about</>} />
            <Route path="/contact" element={<>this is contact</>} />
          </Route>
        </Routes></BrowserRouter>
    </div>
  );
}