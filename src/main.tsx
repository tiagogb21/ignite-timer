import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Closure } from "./Closure.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        {/* <Closure /> */}
    </StrictMode>
);
