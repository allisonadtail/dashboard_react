import React from "react";
import {Route,Routes} from "react-router-dom";
import {DashDefault} from "./pages/dashboard/DefaultLayout";
import {LoginClientComponent} from "./pages/Login/LoginClient";

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<DashDefault />}>
        <Route path="/" element={<LoginClientComponent />} />
        <Route path="/login" element={<LoginClientComponent />} />
      </Route>

      <Route path="/" element="admin">
        <Route path="/" element={<LoginClientComponent />} />
        <Route path="/login" element={<LoginClientComponent />} />
      </Route>
      
    </Routes>
  );
}
