import { Outlet, useLocation } from "react-router-dom";
import Header from "./\bHeader";
import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { SCREEN_HEIGHT } from "../../projectCommon";

export default function Loyout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const screenHeight = useRecoilValue(SCREEN_HEIGHT);

    return (
        <>
            {!isHome && <Header />}
            <Box px="10px" w="100%" h={`${screenHeight - 130}px`}>
                <Outlet />
            </Box>
        </>
    );
}
