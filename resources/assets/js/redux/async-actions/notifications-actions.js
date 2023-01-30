import { viewNotification } from "../../utils/api/notification-api";
import { addNotification } from "../actions/notifications-actions";

export const createNotification =
    (notification) => async (dispatch) => {
        try {
            await viewNotification(notification);
            dispatch(addNotification(notification));
        } catch (error) {
            console.log(error);
        }
    };
