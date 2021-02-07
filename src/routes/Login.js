/* eslint-disable react/no-unescaped-entities */
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

const Login = ({ logUserIn }) => {
  const history = useHistory();
  const toast = useToast();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    axios
      .post("/users/login", data)
      .then((response) => {
        logUserIn(response.data, response.headers["x-access-token"]);
        history.push("/home");
      })
      .catch(() => {
        toast({
          position: "top-right",
          title: "An error occurred.",
          description: "Unable to log you in. Please try again",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex className="p-4" direction="column">
      <Heading size="md">The Pub</Heading>

      <Container centerContent>
        <Text className="my-7">
          Welcome, to The Pub. A place to share laughs and pains. A virtual pub
          so to speak.
        </Text>

        <Heading size="md" className="mb-5">
          Login
        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Flex direction="column">
            <Input
              required
              type="text"
              name="username"
              placeholder="username / email"
              className="mb-6"
              autoComplete="off"
              ref={register}
            />
            <Input
              required
              name="password"
              placeholder="password"
              type="password"
              className="mb-6"
              autoComplete="off"
              ref={register}
            />
            <Button type="submit">Login</Button>
          </Flex>
          <Text fontSize="sm" className="mt-6">
            You can{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              signup
            </Link>{" "}
            if you don't have an account or{" "}
            <Link to="/demo" className="text-blue-400 hover:underline">
              just try it out
            </Link>
          </Text>
        </form>
      </Container>
    </Flex>
  );
};

export default Login;
