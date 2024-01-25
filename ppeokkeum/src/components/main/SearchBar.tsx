import { Box, Input, useToast } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

export default function SearchBar() {
    const toast = useToast();
    const { register, reset, watch } = useForm();

    function onKeydown(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === "Enter") {
            onSubmit();
        }
    }

    function onSubmit() {
        const { location } = watch();
        if (!location) {
            toast({
                status: "error",
                title: "장소를 입력해주세요",
            });
            return;
        }
        console.log(location);
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
                {...register("location")}
                onKeyDown={onKeydown}
            />
        </Box>
    );
}
