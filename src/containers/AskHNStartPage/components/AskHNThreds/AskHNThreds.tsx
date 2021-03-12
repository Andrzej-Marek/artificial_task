import { Box } from "@chakra-ui/layout";
import React, { FC, useMemo } from "react";
import { AskHNThred } from "src/shared/types";
import AskHnThredHitElement from "../AskHnThredHitElement/AskHnThredHitElement";

interface OwnProps {
  thread: AskHNThred;
}

type Props = OwnProps;

const AskHNThreds: FC<Props> = ({ thread }) => {
  const hitsList = useMemo(
    () =>
      thread.hits.map((askHNThredHit) => (
        <AskHnThredHitElement
          askHNThredHit={askHNThredHit}
          key={askHNThredHit.createdAt.toString()}
        />
      )),
    [thread]
  );
  return (
    <Box py={3} px={5} w="100%">
      {hitsList}
    </Box>
  );
};

export default AskHNThreds;
