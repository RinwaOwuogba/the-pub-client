import React from "react";
import {
  Heading,
  Text,
  Flex,
  Input,
  Container,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../axios";

const Signup = ({ logUserIn }) => {
  const history = useHistory();
  const toast = useToast();
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    axios
      .post("/users/signup", data)
      .then((response) => {
        toast({
          position: "top-right",
          title: "Account created.",
          description: "We've created your account.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        logUserIn(response.data, response.headers["x-access-token"]);

        setTimeout(() => history.push("/home"), 2000);
      })
      .catch(() => {
        toast({
          title: "An error occurred.",
          description: "Unable to create user account. Please try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex className="p-4" direction="column">
      <Heading size="md" className="text-gray-900">
        The Pub
      </Heading>

      <Container centerContent>
        <Heading size="md" className="mb-5 mt-14">
          Sign up
        </Heading>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Flex direction="column">
            <Input
              required="true"
              type="email"
              name="email"
              placeholder="email"
              className="mb-6"
              autoComplete={false}
              ref={register}
            />
            <Input
              required
              type="username"
              name="username"
              placeholder="username"
              className="mb-6"
              autoComplete={false}
              ref={register}
            />
            <Input
              required
              name="password"
              placeholder="password"
              type="password"
              className="mb-6"
              ref={register}
            />
            <Button type="submit">Signup</Button>
          </Flex>
          <Text fontSize="sm" className="mt-6">
            You can{" "}
            <Link to="/" className="text-blue-400 hover:underline">
              login
            </Link>{" "}
            if you have an account or{" "}
            <Link to="/demo" className="text-blue-400 hover:underline">
              just try it out
            </Link>
          </Text>
        </form>
      </Container>
    </Flex>
  );
};

export default Signup;
