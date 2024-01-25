import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Loyout from "./screens/global/Layout";
import Notfound from "./screens/global/Notfound";
import Main from "./screens/Main";

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
            {
                path: "main",
                element: <Main />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <Helmet>
                <title>뻐끔뻐끔</title>
            </Helmet>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
