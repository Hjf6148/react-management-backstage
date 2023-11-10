import { createHashRouter } from "react-router-dom";
import { Result } from "antd";

import Root from "./Root";
import Index from "./pages/index";

import LineCharts from "./pages/echarts/line-charts";
import PieCharts from "./pages/echarts/pie-charts";
import BarCharts from "./pages/echarts/bar-charts";
import ScatterCharts from "./pages/echarts/scatter-charts";
import RadarCharts from "./pages/echarts/radar-charts";
import OtherCharts from "./pages/echarts/other-charts";

import AntdLineChart from "./pages/antd-charts/line-chart";
import AntdBarChart from "./pages/antd-charts/bar-chart";
import AntdPieChart from "./pages/antd-charts/pie-chart";
import AntdOtherChart from "./pages/antd-charts/other-chart";

import AntdCarousel from "./pages/carousel/antd-carousel";

import Whimsy from "./pages/css-styles/whimsy";

const router = createHashRouter([
  {
    element: <Root />,
    hasErrorBoundary: true,
    children: [
      { index: true, element: <Index /> },

      { path: "/echarts/line-charts", element: <LineCharts /> },
      { path: "/echarts/pie-charts", element: <PieCharts /> },
      { path: "/echarts/bar-charts", element: <BarCharts /> },
      { path: "/echarts/scatter-charts", element: <ScatterCharts /> },
      { path: "/echarts/radar-charts", element: <RadarCharts /> },
      { path: "/echarts/other-charts", element: <OtherCharts /> },

      { path: "/antd-charts/line-chart", element: <AntdLineChart /> },
      { path: "/antd-charts/bar-chart", element: <AntdBarChart /> },
      { path: "/antd-charts/pie-chart", element: <AntdPieChart /> },
      { path: "/antd-charts/other-chart", element: <AntdOtherChart /> },

      { path: "/carousel/antd-carousel", element: <AntdCarousel /> },

      { path: "/css-styles/whimsy", element: <Whimsy /> },

      {
        path: "*",
        element: (
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />
        ),
      },
    ],
  },
]);

export default router;
