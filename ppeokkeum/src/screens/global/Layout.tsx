import { Outlet, useLocation } from "react-router-dom";
import Header from "./\bHeader";

export default function Loyout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            {!isHome && <Header />}
            <Outlet />
        </>
    );
}
