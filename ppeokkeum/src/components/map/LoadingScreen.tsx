import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

export default function LoadingScreen() {
    return (
        <Center
            w="100%"
            h="100%"
            bgColor="rgba(0, 0, 0, 0.3)"
            position="absolute"
            zIndex="99"
            top={0}
        >
            <VStack>
                <Spinner size="lg" />
                <Text textAlign="center" fontWeight="bold" fontSize="30px">
                    전국의 1,300개 이상의 흡연장소를 불러오고 있습니다!
                </Text>
            </VStack>
        </Center>
    );
}
