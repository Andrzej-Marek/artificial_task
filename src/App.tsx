import React, { FC, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Container, MonthPicker } from "./components";
import { fetchAskHNThread, setFetchDate } from "./store/askHNThred/actions";
import { ReduxStore } from "./store";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  const { fetchDate } = useSelector((store: ReduxStore) => store.askHNThred);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAskHNThread({ date: fetchDate }));
  }, [dispatch, fetchDate]);

  const onChangeFetchDate = (selectedDate: Date) => {
    dispatch(setFetchDate({ selectedDate }));
  };

  return (
    <Container>
      <MonthPicker selectedDate={fetchDate} onSelectDate={onChangeFetchDate} />
      <Heading size="lg" textAlign="center">
        Hello, please choose Ask HN: Who is hiring month{" "}
      </Heading>
      <p>Hello there! 2</p>
    </Container>
  );
};

export default App;
