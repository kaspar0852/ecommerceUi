import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/RouteList";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
