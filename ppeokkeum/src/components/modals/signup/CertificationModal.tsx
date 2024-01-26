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
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { LuUser2 } from "react-icons/lu";
import { LuVenetianMask } from "react-icons/lu";
import { useRecoilValue } from "recoil";
import {
    REGISTER_INPUT_EMAIL,
    REGISTER_INPUT_PASSWORD,
} from "../../../projectCommon";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CertificationModal({ isOpen, onClose }: IProps) {
    const email = useRecoilValue(REGISTER_INPUT_EMAIL);
    const password = useRecoilValue(REGISTER_INPUT_PASSWORD);
    const { register, reset, handleSubmit } = useForm();

    function onSubmit({ name, nicknmame }: FieldValues) {
        console.log(email, password, name, nicknmame);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="#121210" minH="550px">
                <ModalHeader>뻐끔뻐끔에 내 정보 알려주기</ModalHeader>
                <VStack
                    px="20px"
                    alignItems="flex-start"
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Text fontWeight="bold" fontSize="15px" my="20px">
                        뻐끔뻐끔 내에서 사용할 이름과 닉네임을 입력해주세요.
                    </Text>

                    <FormLabel>이름</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={LuUser2} w="20px" h="20px" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="이름을 입력해주세요"
                            borderRadius="5px"
                            border="1px solid #8a7e74"
                            color="#8a7e74"
                            _placeholder={{ color: "#8a7e74" }}
                            {...register("name")}
                        />
                    </InputGroup>

                    <FormLabel mt="20px">닉네임</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={LuVenetianMask} w="20px" h="20px" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="닉네임을 입력해주세요"
                            borderRadius="5px"
                            border="1px solid #8a7e74"
                            color="#8a7e74"
                            _placeholder={{ color: "#8a7e74" }}
                            {...register("nickname")}
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
                        회원가입 완료
                    </Center>
                </VStack>
            </ModalContent>
        </Modal>
    );
}
