import { Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
    const navigate = useNavigate();

    return (
        <VStack w="100%" h="100vh" justifyContent="center">
            <Heading>Page Notfound</Heading>
            <Heading>잘못된 접근입니다</Heading>
            <Heading
                color="blueviolet"
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                    navigate("/");
                }}
            >
                홈으로 돌아가기
            </Heading>
        </VStack>
    );
}
