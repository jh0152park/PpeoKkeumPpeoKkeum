import { Box, Heading, VStack } from "@chakra-ui/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import SearchBar from "../components/main/SearchBar";

export default function Main() {
    return (
        <VStack w="100%" h="100%">
            <SearchBar />

            <Box w="100%" h="100%">
                <Map
                    center={{ lat: 37.5710015, lng: 126.9769419 }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <MapMarker position={{ lat: 37.5710015, lng: 126.9769419 }}>
                        <div style={{ color: "#000" }}>Hello World!</div>
                    </MapMarker>
                </Map>
            </Box>
        </VStack>
    );
}
