import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CatalogPage from "./pages/catalog/CatalogPage";
import "./index.css";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RegisterPage />
        <LoginPage />
        <CatalogPage />
    </StrictMode>
);
