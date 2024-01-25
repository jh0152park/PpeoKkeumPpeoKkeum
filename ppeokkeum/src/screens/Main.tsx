import { Box, Heading, VStack } from "@chakra-ui/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import SearchBar from "../components/main/SearchBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    CURRENT_LATITUDE,
    CURRENT_LONGITUDE,
    MAP_LEVEL,
} from "../projectCommon";
import { useRef } from "react";
import ControlButton from "../components/map/ControlButton";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

export default function Main() {
    const mapRef = useRef<kakao.maps.Map>(null);
    const mapLevel = useRecoilValue(MAP_LEVEL);
    const currentLatitude = useRecoilValue(CURRENT_LATITUDE);
    const currentLongitude = useRecoilValue(CURRENT_LONGITUDE);

    return (
        <VStack w="100%" h="100%">
            <SearchBar />

            <Box w="100%" h="100%" position="relative">
                <VStack position="absolute" zIndex="99" left="10px" top="50px">
                    <ControlButton icon={FiZoomIn} action="zoomIn" />
                    <ControlButton icon={FiZoomOut} action="zoomOut" />
                    <ControlButton
                        icon={FaLocationCrosshairs}
                        action="current"
                    />
                    <ControlButton icon={TiPlus} />
                </VStack>
                <Map
                    center={{ lat: currentLatitude, lng: currentLongitude }}
                    style={{ width: "100%", height: "100%" }}
                    zoomable={true}
                    level={mapLevel}
                    ref={mapRef}
                >
                    {/* <MapMarker position={{ lat: 37.5710015, lng: 126.9769419 }}>
                        <div style={{ color: "#000" }}>Hello World!</div>
                    </MapMarker> */}
                </Map>
            </Box>
        </VStack>
    );
}
