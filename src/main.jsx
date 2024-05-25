import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
