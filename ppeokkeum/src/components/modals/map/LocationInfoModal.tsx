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
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../Firebase";
import Comment from "./Comment";

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

    const dummy_comment = [
        {
            author: "John",
            comment: "노량진 컵밥 맛있네",
        },
        {
            author: "DongHoon",
            comment: "사법고시 노량진에서 준비했었음~~~~~~~~~~~~~~~~~~~~~~",
        },
        {
            author: "eric",
            comment: "밥먹고 식후땡하기 좋음",
        },
        {
            author: "eric",
            comment: "밥먹고 식후땡하기 좋음",
        },
        {
            author: "eric",
            comment: "밥먹고 식후땡하기 좋음",
        },
        {
            author: "eric",
            comment:
                "밥먹고 식후땡하기 좋음 밥먹고 식후땡하기 좋음 밥먹고 식후땡하기 좋음 밥먹고 식후땡하기 좋음 밥먹고 식후땡하기 좋음 밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음밥먹고 식후땡하기 좋음",
        },
    ];

    async function onModalClose() {
        onClose();

        updateLikeAndDislike();
        setLike(0);
        setDislike(0);
    }

    function toggleLike() {
        setLike((prev) => (prev > 0 ? 0 : 1));
    }

    function toggleDislike() {
        setDislike((prev) => (prev < 0 ? 0 : -1));
    }

    async function updateLikeAndDislike() {
        const ref = doc(FirebaseDB, "smokingArea", smokingArea.id);
        await updateDoc(ref, {
            like: like ? smokingArea.like + like : smokingArea.like,
            dislike: dislike
                ? smokingArea.dislike + dislike
                : smokingArea.dislike,
        });
    }

    function updateComment({ comment }: FieldValues) {
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
                        onSubmit={handleSubmit(updateComment)}
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
                    <VStack
                        mt="20px"
                        pr="1px"
                        w="100%"
                        h="200px"
                        overflowY="scroll"
                    >
                        {dummy_comment.map((comment, index) => (
                            <Comment key={index} comment={comment} />
                        ))}
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
