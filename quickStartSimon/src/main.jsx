import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RootStoreProvider } from "./stores/RootStoreProvider.jsx";
import RootStore from "./stores/RootStore.js";

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <RootStoreProvider RootStore={rootStore}>
                <App />
            </RootStoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
