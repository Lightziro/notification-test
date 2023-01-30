import React, { useEffect } from "react";
import { Badge, Toast } from "react-bootstrap";

const NotificationToast = ({ handleClose, notification }) => {
    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            handleClose();
        }, 5000);
        return () => clearTimeout(timeoutRef);
    }, [notification]);

    return (
        <Toast>
            <Toast.Header closeButton={false}>
                <strong className="me-auto">{notification.title}</strong>
            </Toast.Header>
            <Toast.Body>
                <div>{notification.text}</div>
                {notification.categories.map((item) => (
                    <Badge className="ms-2" key={item.id} bg="secondary">
                        {item.category.name}
                    </Badge>
                ))}
            </Toast.Body>
        </Toast>
    );
};
export default NotificationToast;
