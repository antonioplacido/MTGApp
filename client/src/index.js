import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../src/components/App";
import AuthProvider from "./components/AuthContext";

import configStore from "./store";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
