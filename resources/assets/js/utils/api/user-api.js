import instance from "../instance";

export const getUser = async () =>
    instance()
        .get("/getUser")
        .then((res) => res.data);

export const login = async (payload) =>
    instance()
        .post("/login", payload)
        .then((res) => res.data);
