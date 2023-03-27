import React from "react";
import { createRoot } from "react-dom/client";

import App from "./nft-card-preview";
import "./assets/css/styles.css";

const Root = createRoot(document.getElementById("root"));

Root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)