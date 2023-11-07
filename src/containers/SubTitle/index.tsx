import { PropsWithChildren } from "react";

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
