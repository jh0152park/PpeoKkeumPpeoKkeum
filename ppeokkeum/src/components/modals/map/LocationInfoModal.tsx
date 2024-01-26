import {
    Button,
    Center,
    FormLabel,
    HStack,
    Icon,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { ISmokingArea } from "../../../projectCommon";
import { FcLike, FcDislike } from "react-icons/fc";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    smokingArea: ISmokingArea;
}

export default function LocationInfoModal({
    isOpen,
    onClose,
    smokingArea,
}: IProps) {
    const toast = useToast();
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const { register, reset, handleSubmit } = useForm();

    function onModalClose() {
        onClose();
    }

    function toggleLike() {
        setLike((prev) => (prev > 0 ? 0 : 1));
    }

    function toggleDislike() {
        setDislike((prev) => (prev < 0 ? 0 : -1));
    }

    function onSubmit({ comment }: FieldValues) {
        if (!comment) {
            toast({
                status: "error",
                title: "후기를 입력해주세요",
            });
            return;
        }
        console.log(comment);
        reset();
    }

    return (
        <Modal isOpen={isOpen} onClose={onModalClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent bgColor="#121210">
                <ModalHeader>{smokingArea.location}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormLabel>주소</FormLabel>
                    <FormLabel>
                        {smokingArea.address
                            ? smokingArea.address
                            : "확인이 어렵습니다"}
                    </FormLabel>
                    <FormLabel mt="40px">출처</FormLabel>
                    <FormLabel>
                        {smokingArea.isGovernmentData
                            ? "공공데이터"
                            : "회원출처"}
                    </FormLabel>
                    <HStack
                        w="100%"
                        my="30px"
                        justifyContent="center"
                        fontSize="25px"
                    >
                        <HStack color="whitesmoke">
                            <Text>{smokingArea.like + like}</Text>
                            <Center
                                _hover={{
                                    cursor: "pointer",
                                    transform: ["scale(1.2)"],
                                }}
                                transition="all 0.1s linear"
                                onClick={toggleLike}
                            >
                                <Icon as={FcLike} />
                            </Center>
                        </HStack>
                        <HStack>
                            <Center
                                _hover={{
                                    cursor: "pointer",
                                    transform: ["scale(1.2)"],
                                }}
                                transition="all 0.1s linear"
                                onClick={toggleDislike}
                            >
                                <Icon as={FcDislike} />
                            </Center>
                            <Text>{smokingArea.dislike + dislike}</Text>
                        </HStack>
                    </HStack>

                    <HStack
                        w="100%"
                        as="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            w="90%"
                            h="40px"
                            placeholder="흡연장소 후기를 남겨보세요!"
                            color="whitesmoke"
                            _placeholder={{
                                color: "whitesmoke",
                            }}
                            {...register("comment")}
                        />
                        <Button w="10%" type="submit">
                            등록
                        </Button>
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
