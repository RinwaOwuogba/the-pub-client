import React from "react";
import { Text, Flex, Box, Center } from "@chakra-ui/react";
import { ReactComponent as PubIcon } from "../assets/bar-counter.svg";

const ChatScreen = () => {
  return (
    <Box className="hidden md:flex w-full">
      <Center className="p-3 w-full h-full">
        <Flex direction="column" align="center">
          <PubIcon className="w-24 h-auto mb-4" />
          <Text className="font-semibold">Wow, so empty</Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default ChatScreen;
