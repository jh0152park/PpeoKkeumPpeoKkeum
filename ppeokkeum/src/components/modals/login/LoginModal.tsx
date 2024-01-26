import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: IProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent bgColor="#121210">
                <ModalHeader>뻐끔뻐끔에 로그인하기</ModalHeader>
            </ModalContent>
        </Modal>
    );
}
