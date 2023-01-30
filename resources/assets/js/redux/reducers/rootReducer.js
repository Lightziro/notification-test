import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION,
    SET_NOTIFICATIONS,
} from "../types/notifications-types";

const initialState = {
    notifications: [],
    notificationShow: null,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            };
        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.payload],
                notificationShow: state.notificationShow
                    ? state.notificationShow
                    : action.payload,
            };
        case DELETE_NOTIFICATION:
            const listNotification = state.notifications.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                notifications: listNotification,
                notificationShow: listNotification.length
                    ? listNotification[0]
                    : null,
            };
        default:
            return state;
    }
};
