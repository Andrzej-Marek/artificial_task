import React, { FC } from "react";
import { Center, Spinner as ChakraSpinner } from "@chakra-ui/react";

interface OwnProps {}

type Props = OwnProps;

const Spinner: FC<Props> = () => {
  return (
    <Center my={6}>
      <ChakraSpinner size="lg" thickness="3px" color="blue" />
    </Center>
  );
};

export default Spinner;
