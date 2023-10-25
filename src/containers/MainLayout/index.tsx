import { PropsWithChildren } from "react";
import { Breadcrumb, Layout, Menu, Radio, Space, theme } from "antd";
import { useBoolean } from "react-use";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import settings from "../../models/settings";
import { useMenuProps } from "./hooks";

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }: PropsWithChildren) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [memusProps, breadcrumbRoutes] = useMenuProps();
  const [collapsed, setCollapsed] = useBoolean(false);
  const [sizeType, setSizeType] = settings.useSizeType();

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={255}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" {...memusProps} />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 255 }}>
        <Header
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            background: colorBgContainer,
          }}
        >
          <div className="flex flex-row justify-between items-center">
            <Space>
              <div className="mr-2" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>

              <Breadcrumb
                items={breadcrumbRoutes.map(({ title }) => ({
                  title,
                }))}
              />
            </Space>

            <Space>
              <Radio.Group
                value={sizeType}
                size="middle"
                onChange={(e) => setSizeType(e.target.value)}
              >
                <Radio.Button value="middle">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Space>
          </div>
        </Header>

        <Content style={{ margin: 10 }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
