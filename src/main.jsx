import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./context/ThemeContext";

import App from "./App";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utilities.css";
import "./styles/typography.css";
import "./styles/responsive.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <HelmetProvider>

            <BrowserRouter>

                <ThemeProvider>

                    <App />

                </ThemeProvider>

            </BrowserRouter>

        </HelmetProvider>

    </React.StrictMode>

);