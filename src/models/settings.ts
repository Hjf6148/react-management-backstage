import { SizeType } from "antd/es/config-provider/SizeContext";
import { useCallback } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

namespace settings {
  const key = "setting-size";
  const sizeTypeState = atom<SizeType>({
    key: key,
    default: (localStorage.getItem(key) ?? "small") as SizeType,
  });

  export function useSizeType() {
    const [size, set] = useRecoilState(sizeTypeState);
    const setSize = useCallback(
      (size: SizeType) => {
        set(size);
        if (size) {
          localStorage.setItem(key, size);
        } else {
          localStorage.removeItem(key);
        }
      },
      [set]
    );
    return [size, setSize] as const;
  }

  export function useSizeTypeValue() {
    return useRecoilValue(sizeTypeState);
  }
}

export default settings;
