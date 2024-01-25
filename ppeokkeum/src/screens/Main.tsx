import {
    Box,
    Heading,
    VStack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import SearchBar from "../components/main/SearchBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    CURRENT_LATITUDE,
    CURRENT_LONGITUDE,
    ISmokingArea,
    MAP_LEVEL,
} from "../projectCommon";
import { useEffect, useRef, useState } from "react";
import ControlButton from "../components/map/ControlButton";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { collection, onSnapshot, query } from "firebase/firestore";
import { FirebaseDB } from "../Firebase";
import LoadingScreen from "../components/map/LoadingScreen";
import LocationInfoModal from "../components/modals/map/LocationInfoModal";

export default function Main() {
    const toast = useToast();
    const mapRef = useRef<kakao.maps.Map>(null);
    const mapLevel = useRecoilValue(MAP_LEVEL);
    const currentLatitude = useRecoilValue(CURRENT_LATITUDE);
    const currentLongitude = useRecoilValue(CURRENT_LONGITUDE);

    const [smokingArea, setSmokingArea] = useState<ISmokingArea[]>();
    const [singleArea, setSingleArea] = useState<ISmokingArea>();

    const locationInfoModal = useDisclosure();

    async function getSmokingAreas() {
        try {
            const smokeingAreaQuery = query(
                collection(FirebaseDB, "smokingArea")
            );
            await onSnapshot(smokeingAreaQuery, (snapshot) => {
                const entireArea = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        address: doc.data().address,
                        location: doc.data().location,
                        latitude: doc.data().latitude,
                        longitude: doc.data().longitude,
                        isGovernmentData: doc.data().isGovernmentData,
                    };
                });
                setSmokingArea(entireArea);
            });
        } catch (error) {
            console.log(error);
            toast({
                status: "error",
                title: "잠시 후 다시 이용해주세요",
                description: "1,390개의 공공데이터 불러오기를 실패했습니다",
            });
        }
    }

    function onSmokingAreaClick(index: number) {
        if (smokingArea) {
            locationInfoModal.onOpen();
            setSingleArea(smokingArea[index]);
        }
    }

    useEffect(() => {
        getSmokingAreas();
    }, []);

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
                    <ControlButton icon={TiPlus} action="add" />
                </VStack>
                <Map
                    center={{ lat: currentLatitude, lng: currentLongitude }}
                    style={{ width: "100%", height: "100%" }}
                    zoomable={true}
                    level={mapLevel}
                    ref={mapRef}
                >
                    {!smokingArea ? (
                        <LoadingScreen />
                    ) : (
                        smokingArea.map((area, index) => (
                            <MapMarker
                                key={index}
                                position={{
                                    lat: Number(area.latitude),
                                    lng: Number(area.longitude),
                                }}
                                image={{
                                    src: process.env
                                        .REACT_APP_MAKER_IMAGE as "",
                                    size: {
                                        width: 50,
                                        height: 50,
                                    },
                                }}
                                onClick={() => onSmokingAreaClick(index)}
                            />
                        ))
                    )}
                </Map>
            </Box>

            {singleArea && (
                <LocationInfoModal
                    isOpen={locationInfoModal.isOpen}
                    onClose={locationInfoModal.onClose}
                    smokingArea={singleArea}
                />
            )}
        </VStack>
    );
}
