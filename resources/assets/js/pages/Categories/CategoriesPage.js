import React, { Fragment } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import NotificationsView from "../../components/smart/TableView/TableView";

const NotificationsPage = () => {
    const categories = useLoaderData();
    const navigate = useNavigate();

    return (
        <Fragment>
            <Button
                onClick={() => navigate("/admin/categories/create")}
                className="mb-4"
            >
                Создать категорию
            </Button>
            <NotificationsView
                headers={["ID", "Название"]}
                items={categories}
                render={(item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                    </tr>
                )}
            />
        </Fragment>
    );
};
export default NotificationsPage;
