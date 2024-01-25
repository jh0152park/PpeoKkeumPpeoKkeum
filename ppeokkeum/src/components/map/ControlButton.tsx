import { Center, Icon, position, useToast } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    CURRENT_LATITUDE,
    CURRENT_LONGITUDE,
    MAP_LEVEL,
} from "../../projectCommon";

interface IButtonProps {
    icon: IconType;
    action?: "zoomIn" | "zoomOut" | "current" | "add";
}

export default function ControlButton({ icon, action }: IButtonProps) {
    const toast = useToast();
    const [mapLevel, setMapLevel] = useRecoilState(MAP_LEVEL);
    const setCurrentLatitude = useSetRecoilState(CURRENT_LATITUDE);
    const setCurrentLongitude = useSetRecoilState(CURRENT_LONGITUDE);

    function zoomIn() {
        if (mapLevel === 1) {
            return;
        }
        setMapLevel((prev) => prev - 1);
    }

    function zoomOut() {
        if (mapLevel === 14) {
            return;
        }
        setMapLevel((prev) => prev + 1);
    }

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLatitude(position.coords.latitude);
                    setCurrentLongitude(position.coords.longitude);
                },
                (error) => {
                    toast({
                        status: "error",
                        title: "현재 위치를 가지고올 수 없습니다",
                        description:
                            "위치정보를 확인할 수 있는 권한을 확인해주세요",
                    });
                }
            );
        } else {
            toast({
                status: "error",
                title: "현재 위치를 가지고올 수 없습니다",
                description: "위치정보를 확인할 수 있는 권한을 확인해주세요",
            });
        }
    }

    function doSeparateAction() {
        if (action === "zoomIn") {
            zoomIn();
        } else if (action === "zoomOut") {
            zoomOut();
        } else if (action === "current") {
            getCurrentLocation();
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
