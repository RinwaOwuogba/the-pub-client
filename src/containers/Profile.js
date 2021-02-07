import React from "react";
import {
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import Avatar from "../components/Avatar";

const Profile = ({ user }) => {
  const headerSize = useBreakpointValue({ base: "md", md: "md" });

  return (
    <Flex direction="column" className="p-3">
      <Flex className="items-center mb-5 md:py-3">
        <Heading size={headerSize}>Profile</Heading>
        <ModalCloseButton />
        {/* <ModalCloseButton onClick={onClose} /> */}
      </Flex>
      <Flex direction="column" className="items-center mb-10">
        <Avatar name={user.username} />
        <Text fontSize="lg" className="font-semibold">
          {user.username}
        </Text>
      </Flex>
      <Flex direction="column" className="px-3">
        <Text
          size="xs"
          className="text-gray-400 uppercase mb-3 text-xs font-semibold"
        >
          User Information
        </Text>
        <Flex className="max-w-full flex-wrap mb-10">
          <Text className="mr-1 font-semibold">Email:</Text>
          <Text>{user.email}</Text>
        </Flex>
        <Button colorScheme="red" className="w-40 max-w-min">
          Close Account
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
