import { getNotification } from "../api/notification-api";
import { getCategories } from "../api/category-api";

export async function loaderNotification({ params }) {
    return getNotification(params.id);
}

export const loaderCategories = async () => getCategories();
