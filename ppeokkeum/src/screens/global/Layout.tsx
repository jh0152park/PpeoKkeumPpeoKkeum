import { Outlet, useLocation } from "react-router-dom";
import Header from "./\bHeader";
import { Box } from "@chakra-ui/react";

export default function Loyout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            {!isHome && <Header />}
            <Box px="10px">
                <Outlet />
            </Box>
        </>
    );
}
