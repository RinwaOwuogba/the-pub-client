import React from "react";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import Profile from "../../containers/Profile";
import Header from "../../containers/Header";
import ChatsList from "../../containers/ChatsList";
import ChatScreen from "../../containers/ChatScreen";

import useStore from "../../zustand";

const Home = () => {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="column" className="h-screen">
        <Header onOpenProfile={onOpen} />
        <Flex className="h-full">
          <ChatsList />
          <ChatScreen />
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="mx-3">
          <Profile user={loggedInUser} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
