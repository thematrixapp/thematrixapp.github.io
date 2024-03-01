import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import AndroidConfig from "./component/config/android";
import DesktopConfig from "./component/config/desktop";
import TizenConfig from "./component/config/tizen";
import WebOsConfig from "./component/config/webos";

export const _ROUTE = {
  config: "config",
  android: "android",
  desktop: "desktop",
  tizen: "tizen",
  webos: "webos",
};

export const _CONFIG = {
  android:
    "Df87mQ5/ZHR09wnjSmr3m9N4LFTquO4URhdG9ir/csoWvTOGiQY=@LEctc20rReQ5h1bIJmNY00Of01LQdMu/048u71CLXKE=@PX6KfSdZWt4cVuZF3PppJA==@7R8mrgrP4GLOd4G6oNrhRDDqYoxMlrFFFRLCNILUVK0=@sUUswh8oj1BHjhChMpoRQA==",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={`/${_ROUTE.config}/${_ROUTE.android}`}
          element={<AndroidConfig />}
        />
        <Route
          path={`/${_ROUTE.config}/${_ROUTE.android}`}
          element={<DesktopConfig />}
        />
        <Route
          path={`/${_ROUTE.config}/${_ROUTE.android}`}
          element={<TizenConfig />}
        />
        <Route
          path={`/${_ROUTE.config}/${_ROUTE.android}`}
          element={<WebOsConfig />}
        />

        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
