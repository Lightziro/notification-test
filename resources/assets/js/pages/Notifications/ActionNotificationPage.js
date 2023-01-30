import React from "react";
import { useLoaderData } from "react-router-dom";
import NotificationForm from "../../components/smart/NotificationForm/NotificationForm";

const ActionNotificationPage = () => {
    const notification = useLoaderData();
    return <NotificationForm notification={notification} />;
};
export default ActionNotificationPage;
