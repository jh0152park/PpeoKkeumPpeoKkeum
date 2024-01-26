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
    Text,
    VStack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { LuUser2 } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { FieldValues, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import CertificationModal from "./CertificationModal";
import { useSetRecoilState } from "recoil";
import {
    REGISTER_INPUT_EMAIL,
    REGISTER_INPUT_PASSWORD,
} from "../../../projectCommon";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: IProps) {
    const toast = useToast();
    const { register, reset, handleSubmit } = useForm();
    const certificateModal = useDisclosure();

    const setInputEmail = useSetRecoilState(REGISTER_INPUT_EMAIL);
    const setInputPassword = useSetRecoilState(REGISTER_INPUT_PASSWORD);

    function onSubmit({ email, password, passwordCheck }: FieldValues) {
        if (!email) {
            toast({
                status: "error",
                title: "이메일을 입력해주세요",
            });
            return;
        }

        if (!password) {
            toast({
                status: "error",
                title: "비밀번호를 입력해주세요",
            });
            return;
        }

        if (!passwordCheck) {
            toast({
                status: "error",
                title: "비밀번호 확인란을 입력해주세요",
            });
            return;
        }

        if (password != passwordCheck) {
            toast({
                status: "error",
                title: "비밀번호와 비밀번호확인이 서로 다릅니다",
            });
            return;
        }

        // Modal Stack Call
        setInputEmail(email);
        setInputPassword(password);
        certificateModal.onOpen();
    }

    function onModalClose() {
        reset();
        onClose();
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onModalClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent bgColor="#121210">
                    <ModalHeader>뻐끔뻐끔에 회원가입하기</ModalHeader>
                    <VStack
                        px="20px"
                        w="100%"
                        alignItems="flex-start"
                        as="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Text fontWeight="bold" fontSize="16px" my="20px">
                            뻐끔뻐끔은 올바른 흡연문화 정착을 위해 흡연구역
                            내에서만 흡연을 하는 올바른 문화를 만들기 위해
                            제작되었습니다.
                        </Text>

                        <FormLabel>이메일</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon as={MdOutlineEmail} w="20px" h="20px" />
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

                        <FormLabel mt="20px">비밀번호 확인</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon as={FiLock} w="20px" h="20px" />
                            </InputLeftElement>
                            <Input
                                type="password"
                                placeholder="비밀번호를 한번 더 입력해주세요"
                                borderRadius="5px"
                                border="1px solid #8a7e74"
                                color="#8a7e74"
                                _placeholder={{ color: "#8a7e74" }}
                                {...register("passwordCheck")}
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
                            as="button"
                            type="submit"
                        >
                            다음
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

            <CertificationModal
                isOpen={certificateModal.isOpen}
                onClose={certificateModal.onClose}
                previousModalClose={onClose}
                previousFormReset={reset}
            />
        </>
    );
}
