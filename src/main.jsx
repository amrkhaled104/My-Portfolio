import React from "react";
import ReactDOM from "react-dom/client";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
