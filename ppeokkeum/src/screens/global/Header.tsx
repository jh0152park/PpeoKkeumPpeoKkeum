import { Box, Heading, VStack } from "@chakra-ui/react";
import Cigarette from "../../cigarette.json";
import Lottie from "lottie-react";

export default function Header() {
    return (
        <VStack mt="50px" mb="30px">
            <Heading position="relative">
                <span style={{ color: "red" }}>공공데이터와</span> 함께하는
                <span style={{ color: "#FD7210" }}> 뻐끔뻐끔</span>
                <Box position="absolute" top={-10} left={-100}>
                    <Lottie
                        style={{ width: 100, height: 100 }}
                        animationData={Cigarette}
                        loop={true}
                    />
                </Box>
            </Heading>
        </VStack>
    );
}
