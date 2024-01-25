import {
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
            <ModalContent>
                <ModalHeader>{smokingArea.location}</ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
            </ModalContent>
        </Modal>
    );
}
