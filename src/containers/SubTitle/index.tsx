import { PropsWithChildren } from "react";
import { Typography } from "antd";
import settings from "../../models/settings";

type SubTitleProps = PropsWithChildren<{
  className?: string;
  size?: "default" | "small";
}>;

function SubTitle({
  children,
  className = "",
  size = "default",
}: SubTitleProps) {
  const textCls = size === "default" ? "text-[16px]" : "text-[14px]";
  return <h4 className={`mt-2 mb-1 ${textCls} ${className}`}>{children}</h4>;
}

export default SubTitle;

export const TypographyTitle = ({ title }: { title?: string }) => {
  const [sizeType] = settings.useSizeType();
  console.log(sizeType);
  return (
    <Typography.Title
      level={4}
      style={{
        marginBottom: sizeType === "small" ? 12 : 0,
      }}
    >
      {title}
    </Typography.Title>
  );
};
