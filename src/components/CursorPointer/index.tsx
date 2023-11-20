import { PropsWithChildren } from "react";

import SimpleWhite from "./images/SimpleWhite.png";
import SimpleYellow from "./images/SimpleYellow.png";
import OrigamiWhite from "./images/OrigamiWhite.png";
import OrigamiBlack from "./images/OrigamiBlack.png";
import HonkaiStarRailwaySilverWolf from "./images/Honkai_StarRailway_SilverWolf.png";
import Genshin_shenlilinghua from "./images/Genshin_shenlilinghua.gif";
import VolcanicLava from "./images/VolcanicLava.png";
import MinimalistFlintArrows from "./images/MinimalistFlintArrows.png";
import Pen from "./images/Pen.png";
import PurpleHands from "./images/PurpleHands.png";

/**
 *  SIMPLE_WHITE 简约白;
 *  SIMPLE_YELLOW 简约黄;
 *  ORIGAMI_WHITE 折纸白;
 *  ORIGAMI_BLACK 折纸黑;
 *  HONKAI_STARRAILWAY_SILVERWOLF 崩坏：星穹铁道-银狼;
 *  GENSHIN_SHENLILINGHUA 原神：神里绫华;
 *  VOLCANIC_LAVA 火山熔岩;
 *  MINIMALIST_FLINT_ARROWS 简约燧石箭头;
 *  PEN 笔;
 *  PURPLE_HANDS 紫色小手;
 */
type CursorPointerType =
  | "SIMPLE_WHITE"
  | "SIMPLE_YELLOW"
  | "ORIGAMI_WHITE"
  | "ORIGAMI_BLACK"
  | "HONKAI_STARRAILWAY_SILVERWOLF"
  | "GENSHIN_SHENLILINGHUA"
  | "VOLCANIC_LAVA"
  | "MINIMALIST_FLINT_ARROWS"
  | "PEN"
  | "PURPLE_HANDS";
/** 鼠标指针 */
const cursorPointer = {
  /** 简约白 */
  SIMPLE_WHITE: SimpleWhite,
  /** 简约黄 */
  SIMPLE_YELLOW: SimpleYellow,
  /** 折纸白 */
  ORIGAMI_WHITE: OrigamiWhite,
  /** 折纸黑 */
  ORIGAMI_BLACK: OrigamiBlack,
  /** 崩坏：星穹铁道-银狼 */
  HONKAI_STARRAILWAY_SILVERWOLF: HonkaiStarRailwaySilverWolf,
  /** 原神：神里绫华 */
  GENSHIN_SHENLILINGHUA: Genshin_shenlilinghua,
  /** 火山熔岩 */
  VOLCANIC_LAVA: VolcanicLava,
  /** 简约燧石箭头 */
  MINIMALIST_FLINT_ARROWS: MinimalistFlintArrows,
  /** 笔 */
  PEN: Pen,
  /** 紫色小手 */
  PURPLE_HANDS: PurpleHands,
};

type CursorPointerProps = PropsWithChildren<{
  /**
   * 指针类型：
   *  SIMPLE_WHITE 简约白;
   *  SIMPLE_YELLOW 简约黄;
   *  ORIGAMI_WHITE 折纸白;
   *  ORIGAMI_BLACK 折纸黑;
   *  HONKAI_STARRAILWAY_SILVERWOLF 崩坏：星穹铁道-银狼;
   *  GENSHIN_SHENLILINGHUA 原神：神里绫华;
   *  VOLCANIC_LAVA 火山熔岩;
   *  MINIMALIST_FLINT_ARROWS 简约燧石箭头;
   *  PEN 笔;
   *  PURPLE_HANDS 紫色小手;
   */
  type?: CursorPointerType;
}>;
/** 自定义组件鼠标指针 */
const CursorPointer = ({ type, children }: CursorPointerProps) => {
  return (
    <div style={type ? { cursor: `url("${cursorPointer[type]}"), pointer` } : {}}>
      {children}
    </div>
  );
};

export default CursorPointer;
