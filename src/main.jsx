import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import { ToastContainer } from "react-toastify";
import TimelineContextProvider from "./context/TimelineContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router} />,

      <ToastContainer />
    </TimelineContextProvider>
  </StrictMode>,
);
