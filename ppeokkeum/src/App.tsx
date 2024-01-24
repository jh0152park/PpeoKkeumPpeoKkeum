import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Loyout from "./screens/global/Layout";
import Notfound from "./screens/global/Notfound";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Loyout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
