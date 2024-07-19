import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/authentication.jsx";
import { BrowserRouter } from "react-router-dom";
import jwtInterceptor from "./utils/jwtinterceptor.mjs"

jwtInterceptor()

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
);
