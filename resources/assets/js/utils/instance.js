import axios from "axios";
const token = localStorage.getItem("token");
const additionalHeader = token ? { Authorization: `Bearer ${token}` } : {};

export default () =>
    axios.create({
        baseURL: "/api",
        headers: {
            Accept: "application/json",
            ...additionalHeader,
        },
    });
