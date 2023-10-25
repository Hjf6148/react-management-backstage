import dayjs from "dayjs";

export function format(value: any, format: string) {
  if (typeof value !== "undefined") {
    const day = dayjs(value);
    if (day.isValid()) {
      return day.format(format);
    }
  }
}

export function formatTime(value: any) {
  return format(value, "YYYY-MM-DD HH:mm:ss");
}

export function formatDate(value: any) {
  return format(value, "YYYY-MM-DD");
}

export function formatMonth(value: any) {
  return format(value, "YYYY-MM");
}

export function toDateJson(value: any) {
  if (typeof value !== "undefined") {
    const day = dayjs(value);
    if (day.isValid()) {
      return day.toJSON();
    }
  }
}
