import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import { theme } from "./theme";

ReactDOM.render(
  <Suspense fallback={<div>Loading..</div>}>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
