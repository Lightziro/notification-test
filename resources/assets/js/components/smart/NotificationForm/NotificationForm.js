import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    createNotification,
    updateNotification,
} from "../../../utils/api/notification-api";
import { getCategories } from "../../../utils/api/category-api";

const NotificationForm = ({ notification }) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const onSubmit = async (values) => {
        notification
            ? await updateNotification(notification.id, values)
            : await createNotification(values);
        toast.success(
            `Вы успешно ${
                notification ? "отредактировали" : "создали"
            } оповещение`
        );
        navigate("/admin/notifications");
    };

    const formik = useFormik({
        initialValues: {
            title: notification ? notification.title : "",
            text: notification ? notification.text : "",
            categories: [],
        },
        onSubmit,
    });
    useEffect(() => {
        if (!notification) {
            loadCategories();
        }
    }, []);

    const loadCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label>Заголовок</label>
                <input
                    type="title"
                    className="form-control"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Например: Сегодня будет утренний созвон"
                />
            </div>
            <div className="form-group">
                <label>Текст</label>
                <textarea
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    className="form-control"
                    id="text"
                    placeholder="Укажите текст"
                />
            </div>
            {!notification && (
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Категории</label>
                    <select
                        onChange={formik.handleChange}
                        multiple
                        className="form-control"
                        id="categories"
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <button type="submit" className="btn btn-primary">
                {notification ? "Редактировать" : "Создать"}
            </button>
        </form>
    );
};

export default NotificationForm;
