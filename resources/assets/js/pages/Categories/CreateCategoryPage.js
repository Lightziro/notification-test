import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../utils/api/category-api";
import { toast } from "react-toastify";

const CreateCategoryPage = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        await createCategory(values);
        toast.success("Вы успешно создали категорию");
        navigate("/admin/categories");
    };

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label>Название</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Например: Созвон"
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                Создать
            </button>
        </form>
    );
};
export default CreateCategoryPage;
