import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app";
import "./styles.scss";
import { ConfigProvider } from "antd";

import locale from "antd/es/locale/ru_RU";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
