import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface OwnProps {
  onReset: () => void;
}

type Props = OwnProps;

const FormFilterButtonContent: FC<Props> = ({ onReset }) => {
  const { t } = useTranslation("common");
  return (
    <Flex justifyContent="flex-end">
      <Button
        mr={2}
        type="reset"
        variant="link"
        color="red.danger"
        onClick={onReset}
      >
        {t("reset")}
      </Button>
      <Button ml={2} type="submit" variant="solid" bg="green.600" color="white">
        {t("filter")}
      </Button>
    </Flex>
  );
};

export default FormFilterButtonContent;
