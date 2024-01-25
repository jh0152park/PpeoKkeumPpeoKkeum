import Lottie from "lottie-react";
import { Box, Center, Heading, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cigarette from "../cigarette.json";
import Smorking from "../smoking.json";
import Button from "../components/home/button";

{
    /* <Lottie
    style={{ width: 300, height: 300 }}
    animationData={Cigarette}
    loop={true}
/> */
}

export default function Home() {
    const navigate = useNavigate();

    return (
        <Center w="100%" h="100vh">
            <VStack>
                <Lottie
                    style={{ width: 300, height: 300 }}
                    animationData={Smorking}
                    loop={true}
                />
                <Heading
                    mt="-70px"
                    _hover={{ cursor: "pointer", color: "gray" }}
                    transition="all 0.2s linear"
                    onClick={() => {
                        navigate("/main");
                    }}
                >
                    뻐끔뻐끔
                </Heading>
                <VStack mt="50px" spacing="20px">
                    <Button text="로그인" />
                    <Button text="회원가입" />
                </VStack>
            </VStack>
        </Center>
    );
}
