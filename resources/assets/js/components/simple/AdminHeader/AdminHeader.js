import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active pointer">
                        <a
                            className="nav-link"
                            onClick={() => navigate("/admin")}
                        >
                            Главная
                        </a>
                    </li>
                    <li className="nav-item active pointer">
                        <a
                            className="nav-link"
                            onClick={() => navigate("/admin/notifications")}
                        >
                            Оповещения
                        </a>
                    </li>
                    <li className="nav-item active pointer">
                        <a
                            className="nav-link"
                            onClick={() => navigate("/admin/categories")}
                        >
                            Категории
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default AdminHeader;
