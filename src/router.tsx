import { createHashRouter } from "react-router-dom";
import { Result } from "antd";

import Root from "./Root";
import Index from "./pages/index";

import LineCharts from "./pages/echarts-management/line-charts";
import PieCharts from "./pages/echarts-management/pie-charts";
import BarCharts from "./pages/echarts-management/bar-charts";
import ScatterCharts from "./pages/echarts-management/scatter-charts";
import RadarCharts from "./pages/echarts-management/radar-charts";
import OtherCharts from "./pages/echarts-management/other-charts";

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
