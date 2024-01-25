import { Box, Input } from "@chakra-ui/react";

export default function SearchBar() {
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
            />
        </Box>
    );
}
