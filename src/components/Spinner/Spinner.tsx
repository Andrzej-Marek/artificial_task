import React, { FC } from "react";
import { Flex, Spinner as ChakraSpinner, Text } from "@chakra-ui/react";

interface OwnProps {
  text?: string;
}

type Props = OwnProps;

const Spinner: FC<Props> = ({ text }) => {
  return (
    <Flex my={6} justifyContent="center" alignItems="center" flexDir="column">
      <ChakraSpinner size="lg" thickness="3px" color="blue" />
      {text && <Text mt={3}>{text}</Text>}
    </Flex>
  );
};

export default Spinner;
