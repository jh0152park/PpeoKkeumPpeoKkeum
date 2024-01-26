import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
    text: string;
    modalOpen: () => void;
}

export default function Button({ text, modalOpen }: IProps) {
    const navigate = useNavigate();

    function onModalOpen() {
        modalOpen();
    }

    return (
        <Center
            w="150px"
            h="40px"
            borderRadius="10px"
            bgColor="#8a7e74"
            color="white"
            fontWeight="bold"
            _hover={{ cursor: "pointer", transform: ["scale(1.05)"] }}
            transition="all 0.1s linear"
            onClick={onModalOpen}
        >
            {text}
        </Center>
    );
}
