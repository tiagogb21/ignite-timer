import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: redirectIfUser,
                // action: logoutUser,
            },
            {
                path: "/history",
                element: (<History />),
            },
        ],
    },
]);
