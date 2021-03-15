import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TimeService } from "src/shared/services";
import { AskHNThredItem } from "src/shared/types";

interface OwnProps {
  threadItem: AskHNThredItem;
}

type Props = OwnProps;

const JobOffert: FC<Props> = ({ threadItem }) => {
  const { t } = useTranslation("common");
  return (
    <Box border="1px solid black" borderRadius="md" py={2} px={3} my={3}>
      <Flex justifyContent="space-between" my={2} width="100%">
        <Text fontStyle="italic">
          {t("author")}: {threadItem.author}
        </Text>
        <Text fontWeight="700">
          {t("date")}: {TimeService.formatToFullDate(threadItem.createdAt)}
        </Text>
      </Flex>
      <Box dangerouslySetInnerHTML={{ __html: threadItem.text }} />
    </Box>
  );
};

export default JobOffert;
