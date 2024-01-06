import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RootStoreProvider } from "./stores/RootStoreProvider.jsx";
import { RootStore } from "./stores/RootStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RootStoreProvider RootStore={RootStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RootStoreProvider>
    </React.StrictMode>
);
