import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menus from "./menus";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export function useMenuProps() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [{ selectedKeys, openKeys }, setProps] = useState<{
    selectedKeys: string[];
    openKeys: string[];
  }>({
    selectedKeys: [],
    openKeys: [],
  });

  useEffect(() => {
    const [groupkey, key] = pathname.substring(1).split("/");
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i];
      if (
        item.key === groupkey &&
        item.children.some((child) => child.key === key)
      ) {
        setProps((props) => {
          const isOpened = props.openKeys.some((key) => key === item.key);
          const openKeys = isOpened
            ? props.openKeys
            : [...props.openKeys, item.key];
          return { selectedKeys: [key, item.key], openKeys };
        });
        break;
      }
    }
  }, [pathname]);

  const onClick = useCallback(
    ({ keyPath }: { keyPath: string[] }) => {
      const key = [...keyPath].reverse().join("/");
      navigate(`/${key}`);
    },
    [navigate]
  );

  const onOpenChange = useCallback((openKeys: any) => {
    setProps((props) => ({ ...props, openKeys }));
  }, []);

  const breadcrumbRoutes: ItemType[] = useMemo(() => {
    if (!selectedKeys.length) {
      return [];
    }
    const [key, groupKey] = selectedKeys;
    for (const item of menus) {
      if (item.key === groupKey) {
        const child = item.children.find((child) => child.key === key);
        if (child) {
          return [
            { path: item.key, title: item.label },
            { path: child.key, title: child.label },
          ];
        }
      }
    }
    return [];
  }, [selectedKeys]);

  return [
    { selectedKeys, openKeys, items: menus, onClick, onOpenChange },
    breadcrumbRoutes,
  ] as const;
}
