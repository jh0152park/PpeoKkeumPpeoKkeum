import { Box, Heading, VStack } from "@chakra-ui/react";
import Cigarette from "../../cigarette.json";
import Lottie from "lottie-react";
import { refresh } from "../../utils/util";
import SearchBar from "../../components/main/SearchBar";
import { useRecoilValue } from "recoil";
import { CURRENT_MODE } from "../../projectCommon";

export default function Header() {
    const isMobile = useRecoilValue(CURRENT_MODE) === "mobile";

    return (
        <VStack
            bgColor="#101012"
            pt="45px"
            px="10px"
            w="100%"
            h="150px"
            mb="30px"
            position="absolute"
            top={0}
            zIndex={99}
        >
            <Heading
                mb="5px"
                position="relative"
                _hover={{ cursor: "pointer" }}
                onClick={refresh}
            >
                <span
                    style={{
                        fontSize: isMobile ? "20px" : "40px",
                        color: "red",
                    }}
                >
                    공공데이터와
                </span>{" "}
                <span
                    style={{
                        fontSize: isMobile ? "20px" : "40px",
                    }}
                >
                    함께하는
                </span>
                <span
                    style={{
                        fontSize: isMobile ? "20px" : "40px",
                        color: "#FD7210",
                    }}
                >
                    {" "}
                    뻐끔뻐끔
                </span>
                <Box
                    position="absolute"
                    top={isMobile ? -3 : -10}
                    left={isMobile ? -55 : -100}
                >
                    <Lottie
                        style={{
                            width: isMobile ? 60 : 100,
                            height: isMobile ? 60 : 100,
                        }}
                        animationData={Cigarette}
                        loop={true}
                    />
                </Box>
            </Heading>
            <SearchBar />
        </VStack>
    );
}
