import {
    Button,
    FormLabel,
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
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { RegisterUserPlace } from "../../../utils/firestore/place/RegisterPlace";
import { useRecoilValue } from "recoil";
import { CURRENT_LATITUDE, CURRENT_LONGITUDE } from "../../../projectCommon";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddCurrentPlaceModal({ isOpen, onClose }: IProps) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit } = useForm();
    const latitude = useRecoilValue(CURRENT_LATITUDE);
    const longitude = useRecoilValue(CURRENT_LONGITUDE);

    async function onAddPlace({ location }: FieldValues) {
        if (!location) {
            toast({
                status: "error",
                title: "등록할 장소를 입력해주세요",
            });
            return;
        }
        setLoading(true);
        const isSuccess = await RegisterUserPlace(
            location,
            latitude,
            longitude
        );
        if (isSuccess) {
            toast({
                status: "success",
                title: "장소등록 성공",
            });
        } else {
            toast({
                status: "error",
                title: "장소등록 실패",
            });
        }

        setLoading(false);
        reset();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="#121210">
                <ModalHeader>현재 장소 등록</ModalHeader>
                <ModalCloseButton />
                <ModalBody w="100%">
                    <Text fontWeight="bold" fontSize="15px" mb="30px">
                        보다 더 나은 흡연문화를 위해 흡연가능한 장소를
                        등록해주세요!
                    </Text>
                    <VStack
                        w="100%"
                        alignItems="flex-start"
                        as="form"
                        onSubmit={handleSubmit(onAddPlace)}
                    >
                        <FormLabel>장소위치</FormLabel>
                        <Input
                            color="whitesmoke"
                            type="text"
                            placeholder="자세히 적어주세요! (ex: ㅇㅇ역 4번출구 앞 굴다리 아래)"
                            _placeholder={{
                                color: "whitesmoke",
                            }}
                            {...register("location")}
                        />
                        <Button
                            w="100%"
                            isLoading={loading}
                            type="submit"
                            mb="20px"
                        >
                            등록하기
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
