import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./component/AuthProvider";

// import HomePage from "./pages/HomePage";
// import DetailPage from "./pages/DetailPage";
// import jobs from "./jobs.json";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
