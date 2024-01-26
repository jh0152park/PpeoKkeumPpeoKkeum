import {
    Center,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack,
} from "@chakra-ui/react";
import { LuUser2 } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: IProps) {
    const { register, reset, handleSubmit } = useForm();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent bgColor="#121210">
                <ModalHeader>뻐끔뻐끔에 로그인하기</ModalHeader>
                <VStack px="20px" mt="40px" w="100%" alignItems="flex-start">
                    <FormLabel>이메일</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={LuUser2} w="20px" h="20px" />
                        </InputLeftElement>
                        <Input
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            borderRadius="5px"
                            border="1px solid #8a7e74"
                            color="#8a7e74"
                            _placeholder={{ color: "#8a7e74" }}
                            {...register("email")}
                        />
                    </InputGroup>

                    <FormLabel mt="20px">비밀번호</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FiLock} w="20px" h="20px" />
                        </InputLeftElement>
                        <Input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            borderRadius="5px"
                            border="1px solid #8a7e74"
                            color="#8a7e74"
                            _placeholder={{ color: "#8a7e74" }}
                            {...register("password")}
                        />
                    </InputGroup>

                    <Center
                        mt="20px"
                        w="100%"
                        h="45px"
                        bgColor="#8a7e74"
                        borderRadius="5px"
                        color="whitesmoke"
                        fontSize="18px"
                        fontWeight="bold"
                        _hover={{ cursor: "pointer" }}
                        transition="all 0.1s linear"
                    >
                        로그인
                    </Center>
                    <Center
                        mb="20px"
                        w="100%"
                        h="45px"
                        bgColor="whitesmoke"
                        borderRadius="5px"
                        color="black"
                        fontSize="18px"
                        fontWeight="bold"
                        _hover={{ cursor: "pointer" }}
                        transition="all 0.1s linear"
                        position="relative"
                    >
                        구글 계정으로 로그인
                        <Icon
                            as={FcGoogle}
                            position="absolute"
                            left="15px"
                            top={0}
                            bottom={0}
                            marginY="auto"
                            w="25px"
                            h="25px"
                        />
                    </Center>
                </VStack>
            </ModalContent>
        </Modal>
    );
}
