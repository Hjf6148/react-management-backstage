export const decamalFix = (num: number, precision = 8) => {
  if (!num && num !== 0 && !Number(num)) {
    return;
  }

  const pow = Math.pow(10, precision);
  // +0.5修复精度
  const float = num * pow + 0.5;

  return Math.floor(float) / pow;
};

export const formatAmount = (num?: number | string) => {
  if (!num && num !== 0) {
    return "";
  }
  if (typeof num === "string") {
    num = Number(num);
  }
  return (
    Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num) || num
  );
};

export const formatRatio = (num?: number | string) => {
  if (!num && num !== 0) {
    return "";
  }
  if (typeof num === "string") {
    num = Number(num);
  }
  return (
    Intl.NumberFormat("zh-CN", {
      style: "percent",
      maximumFractionDigits: 2,
    }).format(num) || num
  );
};

export const formatTenThousand = (num?: number | string) => {
  if (!num && num !== 0) {
    return "";
  }
  if (typeof num === "string") {
    num = Number(num);
  }
  return decamalFix(num / 10000);
};

export const formatTenThousandAmount = (num?: number | string) => {
  return formatAmount(formatTenThousand(num));
};
