import { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../components/simple/AdminHeader/AdminHeader";
import { getUser } from "../utils/api/user-api";
import Loader from "../components/simple/Loader/Loader";

export const AdminLayout = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const headers = localStorage.getItem("token")
                ? {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                  }
                : {};
            const data = await getUser({
                headers,
            });
            setUser(data);
        } catch (e) {
            navigate("/admin/login");
        }
    };

    return (
        <Fragment>
            {user ? (
                <Fragment>
                    <AdminHeader />
                    <div className="container-lg">
                        <Outlet />
                    </div>
                </Fragment>
            ) : (
                <Loader />
            )}
        </Fragment>
    );
};
