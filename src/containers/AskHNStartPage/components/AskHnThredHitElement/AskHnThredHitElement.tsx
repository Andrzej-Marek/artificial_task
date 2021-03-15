import { Box, Link, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { Link as RouteLink } from "react-router-dom";
import { RouteUrl } from "src/shared/enums";
import { TimeService } from "src/shared/services";
import { AskHNThredHit } from "src/shared/types";

interface OwnProps {
  askHNThredHit: AskHNThredHit;
}

type Props = OwnProps;

const AskHnThredHitElement: FC<Props> = ({ askHNThredHit }) => {
  return (
    <Link
      as={RouteLink}
      to={`${RouteUrl.JobsOffertes}/${askHNThredHit.objectId}`}
    >
      <Box
        my={3}
        border="1px solid blue"
        p={3}
        borderRadius="md"
        cursor="pointer"
        d={{ md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        transition="0.3s"
        _hover={{ transform: "scale(1.01)" }}
      >
        <Box fontSize="sm" d="flex" justifyContent="flex-end" order={2}>
          <Text> {TimeService.formatToFullDate(askHNThredHit.createdAt)}</Text>
        </Box>
        <Text fontWeight="700" textAlign="center" order={1}>
          {askHNThredHit.title || askHNThredHit.storyTitle}
        </Text>
      </Box>
    </Link>
  );
};

export default AskHnThredHitElement;
