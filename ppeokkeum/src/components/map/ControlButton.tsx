import { Center, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRecoilState } from "recoil";
import { MAP_LEVEL } from "../../projectCommon";

interface IButtonProps {
    icon: IconType;
    action?: "zoomIn" | "zoomOut" | "current" | "add";
}

export default function ControlButton({ icon, action }: IButtonProps) {
    const [mapLevel, setMapLevel] = useRecoilState(MAP_LEVEL);

    function ZoomIn() {
        if (mapLevel === 1) {
            return;
        }
        setMapLevel((prev) => prev - 1);
    }

    function ZoomOut() {
        if (mapLevel === 14) {
            return;
        }
        setMapLevel((prev) => prev + 1);
    }

    function doSeparateAction() {
        if (action === "zoomIn") {
            ZoomIn();
        } else if (action === "zoomOut") {
            ZoomOut();
        }
    }

    return (
        <Center
            w="35px"
            h="35px"
            borderRadius="5px"
            bgColor="dodgerblue"
            _hover={{ cursor: "pointer", transform: ["scale(1.1)"] }}
            transition="all 0.2s linear"
            onClick={doSeparateAction}
        >
            <Icon as={icon} w="60%" h="60%" />
        </Center>
    );
}
