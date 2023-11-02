export interface StaticTextProps {
  value: any;
  defaultValue?: string;
}

export default function StaticText({
  value,
  defaultValue = "--",
}: StaticTextProps) {
  return (
    <div className="whitespace-normal text-[15px] text-[rgba(23,26,29,0.8)]">
      {value === "" ? defaultValue : value ?? defaultValue}
    </div>
  );
}
