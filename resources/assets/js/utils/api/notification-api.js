import instance from "../instance";

export const createNotification = async (payload) =>
    instance()
        .post("/notifications", payload)
        .then((res) => res.data);

export const updateNotification = async (notificationId, payload) =>
    instance()
        .put(`/notifications/${notificationId}`, payload)
        .then((res) => res.data);

export const viewNotification = async (notification) =>
    instance()
        .put(`/notifications/${notification.id}/view`)
        .then((res) => res.data);

export const deleteNotification = async (id) =>
    instance()
        .delete(`/notifications/${id}`)
        .then((res) => res.data);

export const getNotification = async (id) =>
    instance()
        .get(`/notifications/${id}`)
        .then((res) => res.data);
