import { useCallback, useRef, useState } from "react";
import CursorPointer from "../../../../components/CursorPointer";
import { useBoolean, useWindowSize } from "react-use";
import Rabbit from "./Rabbit";

/**
 * 桌宠类型：
 *  RABBIT 兔子;
 */
export type PetsType = "RABBIT";
/** 桌宠 */
const desktopPets = {
  /** 兔子 */
  RABBIT: <Rabbit />,
};

interface DesktopPetsProps {
  initLeft?: number;
  initTop?: number;
  /** 桌宠类型 */
  type?: PetsType;
}
/** 桌宠 */
const DesktopPets = ({ initLeft, initTop, type }: DesktopPetsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize(); // 获取屏幕宽高
  const [isMove, setIsMove] = useBoolean(false); // 是否可拖拽状态
  const [position, setPosition] = useState<{ x?: number; y?: number }>({
    x: initLeft,
    y: initTop,
  }); // 相对屏幕的定位
  const [translate, setTranslate] = useState<{
    x?: number;
    y?: number;
  }>(); /** 鼠标相对元素的定位 */

  /** 开启拖拽状态 */
  const onSetIsMoveTrue = useCallback(
    (e: { pageX: number; pageY: number }) => {
      setIsMove(true);
      const offsetLeft = ref.current?.offsetLeft;
      const offsetTop = ref.current?.offsetTop;
      if (offsetLeft !== undefined && offsetTop !== undefined)
        setTranslate({
          x: e.pageX - parseInt(`${offsetLeft}`),
          y: e.pageY - parseInt(`${offsetTop}`),
        });
    },
    [setIsMove]
  );
  /** 关闭拖拽状态 */
  const onSetIsMoveFalse = useCallback(() => {
    setIsMove(false);
    setTranslate(undefined);
  }, [setIsMove]);

  /** 拖拽 */
  const onMouseMove = useCallback(
    (e: { pageX: number; pageY: number }) => {
      if (!isMove) return;
      if (translate?.x === undefined || translate?.y === undefined) return;
      const maxX = width - (ref.current?.offsetWidth || 0);
      const maxY = height - (ref.current?.offsetHeight || 0);
      const x = e.pageX - translate.x;
      const y = e.pageY - translate.y;

      const resultX = x <= 0 ? 0 : x > maxX ? maxX : x;
      const resultY = y <= 0 ? 0 : y > maxY ? maxY : y;
      setPosition({ x: resultX, y: resultY });
    },
    [height, isMove, translate, width]
  );

  const defaultLeft = width - 100;
  const defaultTop = height - 200;

  return type ? (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: position.x ?? defaultLeft,
        top: position.y ?? defaultTop,
        zIndex: 999,
      }}
      onMouseMove={onMouseMove}
      onMouseDown={onSetIsMoveTrue}
      onMouseUp={onSetIsMoveFalse}
      onMouseLeave={onSetIsMoveFalse}
      onMouseOver={onSetIsMoveFalse}
    >
      <CursorPointer type="PURPLE_HANDS">{desktopPets[type]}</CursorPointer>
    </div>
  ) : null;
};

export default DesktopPets;
