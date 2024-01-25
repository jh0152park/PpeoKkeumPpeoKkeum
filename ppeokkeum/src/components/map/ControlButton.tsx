import { Center, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IButtonProps {
    icon: IconType;
    action?: "zoomIn" | "zoomOut" | "current" | "add";
}

export default function ControlButton({ icon }: IButtonProps) {
    return (
        <Center
            w="35px"
            h="35px"
            borderRadius="5px"
            bgColor="dodgerblue"
            _hover={{ cursor: "pointer", transform: ["scale(1.1)"] }}
            transition="all 0.2s linear"
        >
            <Icon as={icon} w="60%" h="60%" />
        </Center>
    );
}
