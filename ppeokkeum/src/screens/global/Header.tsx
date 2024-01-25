import { Box, Heading, VStack } from "@chakra-ui/react";
import Cigarette from "../../cigarette.json";
import Lottie from "lottie-react";

export default function Header() {
    return (
        <VStack mt="50px" mb="10px">
            <Heading position="relative">
                뻐끔뻐끔
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
