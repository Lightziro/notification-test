import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Spinner />
        </div>
    );
};
export default Loader;
