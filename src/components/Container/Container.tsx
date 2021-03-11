import { Box } from "@chakra-ui/layout";
import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const Container: FC<Props> = ({ children }) => {
  return (
    <Box p={{ base: "5px 10px", md: "10px 15px" }} m="0 auto" maxW="1400px">
      {children}
    </Box>
  );
};

export default Container;
