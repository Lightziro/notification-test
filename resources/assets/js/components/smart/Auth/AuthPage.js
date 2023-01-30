import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ urlAfterAuth, requestAuth }) {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const data = await requestAuth(values);
            localStorage.setItem("token", data.token);
            toast.success("Вы успешно авторизовались");
            navigate(urlAfterAuth);
        } catch (e) {
            const message = e.response?.data?.message ?? "Произошла ошибка";
            toast.error(message);
            console.log(e);
        }
    };

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit,
    });

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card bg-white">
                            <div className="card-body p-5">
                                <form
                                    className="mb-3 mt-md-4"
                                    onSubmit={formik.handleSubmit}
                                >
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Авторизация
                                    </h2>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="login"
                                            className="form-label"
                                        >
                                            Login
                                        </label>
                                        <input
                                            type="login"
                                            className="form-control"
                                            id="login"
                                            required
                                            placeholder="admin"
                                            onChange={formik.handleChange}
                                            value={formik.values.login}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label "
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            className="form-control"
                                            id="password"
                                            placeholder="*******"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-outline-dark"
                                            type="submit"
                                        >
                                            Войти
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
