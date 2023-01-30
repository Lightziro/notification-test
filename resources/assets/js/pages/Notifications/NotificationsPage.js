import React, { Fragment, useEffect, useState } from "react";
import instance from "../../utils/instance";
import { useNavigate } from "react-router-dom";
import { deleteNotification } from "../../utils/api/notification-api";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import NotificationsView from "../../components/smart/TableView/TableView";
import Loader from "../../components/simple/Loader/Loader";

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        loadNotifications();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteNotification(id);
            setNotifications((prev) => prev.filter((item) => item.id !== id));
            toast.info(`Вы удалили оповещение ${id}`);
        } catch (e) {}
    };

    const loadNotifications = async () => {
        const data = await instance()
            .get("/notifications")
            .then((res) => res.data);
        setNotifications(data);
    };
    return (
        <Fragment>
            <Button
                onClick={() => navigate("/admin/notifications/create")}
                className="mb-4"
            >
                Создать оповещение
            </Button>
            {notifications ? (
                <NotificationsView
                    headers={["ID", "Заголовок", "Текст", "Просмотры"]}
                    items={notifications}
                    render={(item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.text}</td>
                            <td>{item.views}</td>
                            <td>
                                <div className="d-flex">
                                    <i
                                        className="bi bi-pencil pointer"
                                        onClick={() =>
                                            navigate(`update/${item.id}`)
                                        }
                                    ></i>
                                    <i
                                        className="bi bi-x-circle ms-3 pointer"
                                        onClick={() => handleDelete(item.id)}
                                    ></i>
                                </div>
                            </td>
                        </tr>
                    )}
                />
            ) : (
                <Loader />
            )}
        </Fragment>
    );
};
export default NotificationsPage;
