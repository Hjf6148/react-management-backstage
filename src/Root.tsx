import { Spin } from "antd";
import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import MainLayout from "./containers/MainLayout";

function RootOutlet() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <Suspense
        fallback={
          <Spin tip="正在登录...">
            <div className="h-20" />
          </Spin>
        }
      >
        <RootOutlet />
      </Suspense>
    </>
  );
}
