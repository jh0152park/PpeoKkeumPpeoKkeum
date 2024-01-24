import { Heading, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <VStack w="100%" h="100vh">
            <Image w="45%" h="75%" src="/images/smoking.jpg" />
            <Heading
                _hover={{ cursor: "pointer", color: "gray" }}
                transition="all 0.2s linear"
                onClick={() => {
                    navigate("/main");
                }}
            >
                지정된 흡연장소 보러가기
            </Heading>
        </VStack>
    );
}
