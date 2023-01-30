import instance from "../instance";

export const createCategory = async (payload) =>
    instance()
        .post("/categories", payload)
        .then((res) => res.data);

export const getCategories = async () =>
    instance()
        .get("/categories")
        .then((res) => res.data);
