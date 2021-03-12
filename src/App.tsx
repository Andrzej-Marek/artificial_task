import React, { FC } from "react";
import { Container, Routes } from "./components";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <Container>
      <Routes />
    </Container>
  );
};

export default App;
