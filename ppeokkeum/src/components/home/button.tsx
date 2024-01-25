import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
    text: string;
}

export default function Button({ text }: IProps) {
    const navigate = useNavigate();

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
            onClick={() => {
                navigate("/main");
            }}
        >
            {text}
        </Center>
    );
}
