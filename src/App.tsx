import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import settings from "./models/settings";

import router from "./router";

dayjs.locale("zh-cn");

function App() {
  const sizeType = settings.useSizeTypeValue();
  return (
    <ConfigProvider locale={zhCN} componentSize={sizeType}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
