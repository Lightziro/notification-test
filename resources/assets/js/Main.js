import LoginPage from "./components/smart/Auth/AuthPage";
import { createBrowserRouter } from "react-router-dom";
import NotificationsPage from "./pages/Notifications/NotificationsPage";
import ActionNotificationPage from "./pages/Notifications/ActionNotificationPage";
import { AdminLayout } from "./layout/AdminLayout";
import { loaderCategories, loaderNotification } from "./utils/routes/loader";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import CreateCategoryPage from "./pages/Categories/CreateCategoryPage";
import NotificationPage from "./pages/NotificationPage";
import { UserLayout } from "./layout/UserLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <NotificationPage />,
            },
        ],
    },
    {
        path: "/admin/login",
        element: <LoginPage />,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "notifications",
                children: [
                    { index: true, element: <NotificationsPage /> },
                    {
                        path: "create",
                        element: <ActionNotificationPage />,
                    },
                    {
                        path: "update/:id",
                        element: <ActionNotificationPage />,
                        loader: loaderNotification,
                    },
                ],
            },
            {
                path: "categories",
                children: [
                    {
                        index: true,
                        element: <CategoriesPage />,
                        loader: loaderCategories,
                    },
                    {
                        path: "create",
                        element: <CreateCategoryPage />,
                    },
                ],
            },
        ],
    },
]);
export default router;
