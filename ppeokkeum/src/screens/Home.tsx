import Lottie from "lottie-react";
import { Center, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Smorking from "../smoking.json";
import Button from "../components/home/Button";
import LoginModal from "../components/modals/login/LoginModal";
import SignupModal from "../components/modals/signup/SignupModal";

export default function Home() {
    const navigate = useNavigate();
    const loginModal = useDisclosure();
    const signinModal = useDisclosure();

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
                    <Button text="로그인" modalOpen={loginModal.onOpen} />
                    <Button text="회원가입" modalOpen={signinModal.onOpen} />
                </VStack>
            </VStack>
            <LoginModal
                isOpen={loginModal.isOpen}
                onClose={loginModal.onClose}
            />
            <SignupModal
                isOpen={signinModal.isOpen}
                onClose={signinModal.onClose}
            />
        </Center>
    );
}
