import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Loyout from "./screens/global/Layout";
import Notfound from "./screens/global/Notfound";
import Main from "./screens/Main";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { CURRENT_MODE } from "./projectCommon";

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
    // uploadDB();
    const setCurrentMode = useSetRecoilState(CURRENT_MODE);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setCurrentMode("mobile");
        }
    }, []);

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
