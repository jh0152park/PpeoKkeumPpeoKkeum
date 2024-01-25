import { Box, Input, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import {
    CURRENT_LATITUDE,
    CURRENT_LONGITUDE,
    MAP_LEVEL,
} from "../../projectCommon";
import { useState } from "react";

export default function SearchBar() {
    const toast = useToast();
    const [location, setLocation] = useState("");
    const setMapLevel = useSetRecoilState(MAP_LEVEL);
    const setCurrentLatitude = useSetRecoilState(CURRENT_LATITUDE);
    const setCurrentLongitude = useSetRecoilState(CURRENT_LONGITUDE);

    function onKeydown(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === "Enter") {
            onSubmit();
        }
    }

    function onSubmit() {
        if (!location) {
            toast({
                status: "error",
                title: "장소를 입력해주세요",
            });
            return;
        }
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(location, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                if (data) {
                    setMapLevel(2);
                    setCurrentLatitude(Number(data[0].y));
                    setCurrentLongitude(Number(data[0].x));
                    toast({
                        status: "info",
                        title: `${location}주변에 흡연장소가 없으신가요!?`,
                        description:
                            "합법적인 흡연장소를 알고계시다면 추가해주세요!",
                    });
                } else {
                    toast({
                        status: "error",
                        title: `${location}을 찾을 수 없습니다`,
                        description: "다른 장소를 검색해보세요",
                    });
                }
            } else {
                toast({
                    status: "error",
                    title: `${location}을 찾을 수 없습니다`,
                    description: "다른 장소를 검색해보세요",
                });
            }
        });
        setLocation("");
    }

    return (
        <Box w="100%" h="40px">
            <Input
                w="100%"
                h="100%"
                fontSize="15px"
                fontWeight="bold"
                bgColor="inherit"
                color="whitesmoke"
                placeholder="장소검색"
                _placeholder={{ fontSize: "15px", fontWeight: "bold" }}
                onKeyDown={onKeydown}
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />
        </Box>
    );
}
