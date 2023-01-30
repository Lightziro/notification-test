import React, { Fragment, useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useDispatch, useSelector } from "react-redux";
import { createNotification } from "../redux/async-actions/notifications-actions";
import NotificationToast from "../components/smart/NotificationToast/NotificationToast";
import { deleteNotification } from "../redux/actions/notifications-actions";

const NotificationPage = () => {
    const dispatch = useDispatch();
    const [echo, setEcho] = useState(null);
    const { notificationShow } = useSelector((state) => state);
    useEffect(() => {
        window.Pusher = Pusher;
        const client = new Echo({
            broadcaster: "pusher",
            key: "work",
            wsHost: "127.0.0.1",
            wsPort: 6001,
            cluster: "mt1",
            encrypted: false,
            forceTLS: false,
        });
        setEcho(client);
    }, []);
    useEffect(() => {
        if (echo) {
            echo.channel(`notifications`).listen(
                ".App\\Events\\NotificationCreated",
                (notification) => {
                    dispatch(createNotification(notification));
                }
            );
        }
        return () => {
            if (echo) {
                echo.leaveChannel(`notifications`);
            }
        };
    }, [echo]);

    const handleClose = () => dispatch(deleteNotification(notificationShow.id));

    return (
        <Fragment>
            {notificationShow && (
                <NotificationToast
                    notification={notificationShow}
                    handleClose={handleClose}
                />
            )}
        </Fragment>
    );
};
export default NotificationPage;
