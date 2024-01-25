import {
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { ISmokingArea } from "../../../projectCommon";

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
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
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
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
