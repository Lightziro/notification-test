import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "../Main";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("index-page");
const root = createRoot(container);
root.render(
    <Fragment>
        <ToastContainer />
        <RouterProvider router={router} />
    </Fragment>
);
