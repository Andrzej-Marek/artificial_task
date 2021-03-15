import React, { FC, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/layout";
import { Heading, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { MonthPicker, Spinner } from "src/components";
import { ReduxStore } from "src/store";
import { fetchAskHNThread, setFetchDate } from "src/store/askHNThred/actions";
import { AskHNThreds } from "./components";

interface OwnProps {}

type Props = OwnProps;

const MAX_PICKER_DATE = new Date();

const AskHNMonthJobOfferts: FC<Props> = () => {
  const { t } = useTranslation("startPage");
  const { fetchDate, isPending, threads } = useSelector(
    (store: ReduxStore) => store.askHNThred
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAskHNThread({ date: fetchDate }));
  }, [dispatch, fetchDate]);

  const onChangeFetchDate = (selectedDate: Date) => {
    dispatch(setFetchDate({ selectedDate }));
  };

  const threadList = useMemo(() => {
    return threads.map((thread) => (
      <AskHNThreds thread={thread} key={thread.params} />
    ));
  }, [threads]);

  const loadingElement = isPending && <Spinner />;

  return (
    <Box>
      <Heading size="lg" textAlign="center">
        {t("welcomeText")}
      </Heading>
      <Center my={4}>
        <MonthPicker
          selectedDate={fetchDate}
          onSelectDate={onChangeFetchDate}
          maxDate={MAX_PICKER_DATE}
        />
      </Center>
      {loadingElement}
      <Box w="90vw" maxWidth="800px" m="0 auto" py={5}>
        {threadList}
      </Box>
    </Box>
  );
};

export default AskHNMonthJobOfferts;
