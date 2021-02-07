import React from "react";
import { Text, Flex, Heading, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = ({ onOpenProfile }) => {
  return (
    <Flex
      wrap="wrap"
      className="p-3 md:py-4 items-center justify-between border-gray-300 border-b"
    >
      <Heading size="sm">The Pub</Heading>
      <Flex align="center" wrap="wrap">
        <Link to="/logout">
          <Text fontSize="sm" className="mr-3">
            Logout
          </Text>
        </Link>

        <Button onClick={onOpenProfile} variant="ghost">
          <Avatar size="sm" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
