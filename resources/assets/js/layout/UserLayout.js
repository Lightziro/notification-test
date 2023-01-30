import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-bootstrap";

export const UserLayout = () => {
    return (
        <Provider store={store}>
            <ToastContainer position="bottom-center">
                <Outlet />
            </ToastContainer>
        </Provider>
    );
};
