import { Avatar, HStack, Text } from "@chakra-ui/react";
import { IComment } from "../../../projectCommon";

export default function Comment({ comment }: { comment: IComment }) {
    return (
        <HStack
            w="100%"
            minH="50px"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="10px"
            px="10px"
        >
            <Avatar name={comment.author} size="sm" />
            <Text textAlign="left">
                {comment.comment.length > 75
                    ? comment.comment.slice(0, 75) + "..."
                    : comment.comment}
            </Text>
        </HStack>
    );
}
