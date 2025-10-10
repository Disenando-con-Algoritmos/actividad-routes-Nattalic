import { createBrowserRouter } from "react-router";

import LandingPage from "../pages/landing/LandingPage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: "/landing",
            Component: LandingPage,
        },
        {
            path: "/register",
            Component: RegisterPage,
        },
        {
            path: "/login",
            Component: LoginPage,
        },
        {
            path: "/catalog",
            Component: CatalogPage,
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "catalog",
                    element: <CatalogPage />,
                },
            ],
        },
    ],
    { basename: "/dmi" }
);

export default router;
