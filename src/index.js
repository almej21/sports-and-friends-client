import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import fixturesReducer from "features/fixturesSlice";
import userInfoReducer from "features/userInfoSlice";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import customTheme from "chakra-theme";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    fixtures: fixturesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
