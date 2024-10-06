import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { router } from "./routers/routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
