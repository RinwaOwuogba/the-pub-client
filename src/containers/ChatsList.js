import React from "react";
import {
  Text,
  Flex,
  Heading,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

import { ReactComponent as Happy } from "../assets/happy.svg";
import { ReactComponent as Sad } from "../assets/sad.svg";
import { ReactComponent as Angry } from "../assets/angry.svg";
import { ReactComponent as Afraid } from "../assets/afraid.svg";

const ChatsList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction="column"
        className="h-full w-full md:w-60 p-3 md:bg-gray-800"
      >
        <Heading size="sm" className="md:text-white">
          Chats
        </Heading>
        <Center className="p-3 flex-1 h-full">
          <Flex direction="column" className="max-w-full">
            <Text fontSize="sm" className="w-64 text-gray-500 mb-3 max-w-full">
              There's no one at your table right now. Why don't you start a
              chat?
            </Text>
            <Button onClick={onOpen}>
              <Text fontSize="sm">New Chat</Text>
            </Button>
          </Flex>
        </Center>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="mx-3 p-3 pt-10">
          <ModalCloseButton />
          <Text className="mb-5">How are you feeling?</Text>
          <Flex direction="column">
            <Button className="mb-5">
              <Flex alignItems="center" className="w-full">
                <Happy className="w-6 h-auto mr-5" />
                <Text>Happy</Text>
              </Flex>
            </Button>

            <Button className="mb-5">
              <Flex alignItems="center" className="w-full">
                <Sad className="w-6 h-auto mr-5" />
                <Text>Sad</Text>
              </Flex>
            </Button>

            <Button className="mb-5">
              <Flex alignItems="center" className="w-full">
                <Angry className="w-6 h-auto mr-5" />
                <Text>Angry</Text>
              </Flex>
            </Button>

            <Button className="mb-5">
              <Flex alignItems="center" className="w-full">
                <Afraid className="w-6 h-auto mr-5" />
                <Text>Afraid</Text>
              </Flex>
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatsList;
