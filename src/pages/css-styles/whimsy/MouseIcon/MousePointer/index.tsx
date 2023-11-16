import React, { useEffect, useRef } from "react";
import { useBoolean, useMouse } from "react-use";
import { Image } from "antd";

import SimpleWhite from "./SimpleWhite.png";
import SimpleYellow from "./SimpleYellow.png";
import OrigamiWhite from "./OrigamiWhite.png";
import OrigamiBlack from "./OrigamiBlack.png";
import HonkaiStarRailwaySilverWolf from "./Honkai_StarRailway_SilverWolf.png";
import Genshin_shenlilinghua from "./Genshin_shenlilinghua.gif";
import VolcanicLava from "./VolcanicLava.png";
import MinimalistFlintArrows from "./MinimalistFlintArrows.png";
import Pen from "./Pen.png";
import PurpleHands from "./PurpleHands.png";

import TriangularBlue from "./TriangularBlue.png";
import TriangularLime from "./TriangularLime.png";
import TriangularCoffee from "./TriangularCoffee.png";
import KUDACursors1 from "./KUDACursors1.png";
import KUDACursors2 from "./KUDACursors2.png";
import KUDACursors3 from "./KUDACursors3.png";
import KUDACursors4 from "./KUDACursors4.png";
import KUDACursors5 from "./KUDACursors5.png";
import Earth from "./Earth.png";
import Watermelon from "./Watermelon.png";
import Diablo from "./Diablo.png";
import PLAINCursor from "./PLAINCursor.png";

import ExtraPokeBall from "./extra_pokeball.png";
import ExtraPig from "./extra_pig.png";
import ExtraSonic from "./extra_sonic.png";
import ExtraBoboboy from "./extra_boboboy.png";
import ExtraSpongeBob from "./extra_spongebob.png";
import ExtraVortex from "./extra_vortex.png";
import ExtraFlower from "./extra_flower.png";

/**
 * 鼠标指针 type：
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
 *  TRIANGULAR_BLUE 三角渐变蓝;
 *  TRIANGULAR_LIME 三角渐变绿（青柠）;
 *  TRIANGULAR_COFFEE 三角渐变咖啡;
 *  KUDA_CURSORS_1 简约复古KUDA游标1.0;
 *  KUDA_CURSORS_2 简约复古KUDA游标2.0;
 *  KUDA_CURSORS_3 简约复古KUDA游标3.0;
 *  KUDA_CURSORS_4 简约复古KUDA游标4.0;
 *  KUDA_CURSORS_5 简约复古KUDA游标5.0;
 *  EARTH 地球;
 *  WATERMELON 夏日西瓜;
 *  DIABLO 暗黑破坏神;
 *  PLAIN_CURSOR 简约黑白箭头;
 */
export type MousePointerType =
  | "SIMPLE_WHITE"
  | "SIMPLE_YELLOW"
  | "ORIGAMI_WHITE"
  | "ORIGAMI_BLACK"
  | "HONKAI_STARRAILWAY_SILVERWOLF"
  | "GENSHIN_SHENLILINGHUA"
  | "VOLCANIC_LAVA"
  | "MINIMALIST_FLINT_ARROWS"
  | "PEN"
  | "PURPLE_HANDS"
  | "TRIANGULAR_BLUE"
  | "TRIANGULAR_LIME"
  | "TRIANGULAR_COFFEE"
  | "KUDA_CURSORS_1"
  | "KUDA_CURSORS_2"
  | "KUDA_CURSORS_3"
  | "KUDA_CURSORS_4"
  | "KUDA_CURSORS_5"
  | "EARTH"
  | "WATERMELON"
  | "DIABLO"
  | "PLAIN_CURSOR";
/**
 * 鼠标指针 enum：
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
 *  TRIANGULAR_BLUE 三角渐变蓝;
 *  TRIANGULAR_LIME 三角渐变绿（青柠）;
 *  TRIANGULAR_COFFEE 三角渐变咖啡;
 *  KUDA_CURSORS_1 简约复古KUDA游标1.0;
 *  KUDA_CURSORS_2 简约复古KUDA游标2.0;
 *  KUDA_CURSORS_3 简约复古KUDA游标3.0;
 *  KUDA_CURSORS_4 简约复古KUDA游标4.0;
 *  KUDA_CURSORS_5 简约复古KUDA游标5.0;
 *  EARTH 地球;
 *  WATERMELON 夏日西瓜;
 *  DIABLO 暗黑破坏神;
 *  PLAIN_CURSOR 简约黑白箭头;
 */
enum MousePointerEnum {
  /** 简约白 */
  SIMPLE_WHITE = "SIMPLE_WHITE",
  /** 简约黄 */
  SIMPLE_YELLOW = "SIMPLE_YELLOW",
  /** 折纸白 */
  ORIGAMI_WHITE = "ORIGAMI_WHITE",
  /** 折纸黑 */
  ORIGAMI_BLACK = "ORIGAMI_BLACK",
  /** 崩坏：星穹铁道-银狼 */
  HONKAI_STARRAILWAY_SILVERWOLF = "HONKAI_STARRAILWAY_SILVERWOLF",
  /** 原神：神里绫华 */
  GENSHIN_SHENLILINGHUA = "GENSHIN_SHENLILINGHUA",
  /** 火山熔岩 */
  VOLCANIC_LAVA = "VOLCANIC_LAVA",
  /** 简约燧石箭头 */
  MINIMALIST_FLINT_ARROWS = "MINIMALIST_FLINT_ARROWS",
  /** 笔 */
  PEN = "PEN",
  /** 紫色小手 */
  PURPLE_HANDS = "PURPLE_HANDS",
  /** 三角渐变蓝 */
  TRIANGULAR_BLUE = "TRIANGULAR_BLUE",
  /** 三角渐变绿（青柠） */
  TRIANGULAR_LIME = "TRIANGULAR_LIME",
  /** 三角渐变咖啡 */
  TRIANGULAR_COFFEE = "TRIANGULAR_COFFEE",
  /** 简约复古KUDA游标1.0 */
  KUDA_CURSORS_1 = "KUDA_CURSORS_1",
  /** 简约复古KUDA游标2.0 */
  KUDA_CURSORS_2 = "KUDA_CURSORS_2",
  /** 简约复古KUDA游标3.0 */
  KUDA_CURSORS_3 = "KUDA_CURSORS_3",
  /** 简约复古KUDA游标4.0 */
  KUDA_CURSORS_4 = "KUDA_CURSORS_4",
  /** 简约复古KUDA游标5.0 */
  KUDA_CURSORS_5 = "KUDA_CURSORS_5",
  /** 地球 */
  EARTH = "EARTH",
  /** 夏日西瓜 */
  WATERMELON = "WATERMELON",
  /** 暗黑破坏神 */
  DIABLO = "DIABLO",
  /** 简约黑白箭头 */
  PLAIN_CURSOR = "PLAIN_CURSOR",
}
/** 鼠标指针 */
const mousePointer = {
  /** 简约白 */
  [MousePointerEnum.SIMPLE_WHITE]: SimpleWhite,
  /** 简约黄 */
  [MousePointerEnum.SIMPLE_YELLOW]: SimpleYellow,
  /** 折纸白 */
  [MousePointerEnum.ORIGAMI_WHITE]: OrigamiWhite,
  /** 折纸黑 */
  [MousePointerEnum.ORIGAMI_BLACK]: OrigamiBlack,
  /** 崩坏：星穹铁道-银狼 */
  [MousePointerEnum.HONKAI_STARRAILWAY_SILVERWOLF]: HonkaiStarRailwaySilverWolf,
  /** 原神：神里绫华 */
  [MousePointerEnum.GENSHIN_SHENLILINGHUA]: Genshin_shenlilinghua,
  /** 火山熔岩 */
  [MousePointerEnum.VOLCANIC_LAVA]: VolcanicLava,
  /** 简约燧石箭头 */
  [MousePointerEnum.MINIMALIST_FLINT_ARROWS]: MinimalistFlintArrows,
  /** 笔 */
  [MousePointerEnum.PEN]: Pen,
  /** 紫色小手 */
  [MousePointerEnum.PURPLE_HANDS]: PurpleHands,
  /** 三角渐变蓝 */
  [MousePointerEnum.TRIANGULAR_BLUE]: TriangularBlue,
  /** 三角渐变绿（青柠） */
  [MousePointerEnum.TRIANGULAR_LIME]: TriangularLime,
  /** 三角渐变咖啡 */
  [MousePointerEnum.TRIANGULAR_COFFEE]: TriangularCoffee,
  /** 简约复古KUDA游标1.0 */
  [MousePointerEnum.KUDA_CURSORS_1]: KUDACursors1,
  /** 简约复古KUDA游标2.0 */
  [MousePointerEnum.KUDA_CURSORS_2]: KUDACursors2,
  /** 简约复古KUDA游标3.0 */
  [MousePointerEnum.KUDA_CURSORS_3]: KUDACursors3,
  /** 简约复古KUDA游标4.0 */
  [MousePointerEnum.KUDA_CURSORS_4]: KUDACursors4,
  /** 简约复古KUDA游标5.0 */
  [MousePointerEnum.KUDA_CURSORS_5]: KUDACursors5,
  /** 地球 */
  [MousePointerEnum.EARTH]: Earth,
  /** 夏日西瓜 */
  [MousePointerEnum.WATERMELON]: Watermelon,
  /** 暗黑破坏神 */
  [MousePointerEnum.DIABLO]: Diablo,
  /** 简约黑白箭头 */
  [MousePointerEnum.PLAIN_CURSOR]: PLAINCursor,
};

/**
 * 鼠标指针额外内容 type:
 *  EXTRA_SONIC 索尼克;
 *  EXTRA_BOBOBOY 波波仔;
 *  EXTRA_SPONGE_BOB 海绵宝宝;
 *  EXTRA_PIG 猪头;
 *  EXTRA_POKE_BALL 精灵球;
 *  EXTRA_VORTEX 旋涡;
 *  EXTRA_FLOWER 花;
 */
export type ExtraType =
  | "EXTRA_SONIC"
  | "EXTRA_BOBOBOY"
  | "EXTRA_SPONGE_BOB"
  | "EXTRA_PIG"
  | "EXTRA_POKE_BALL"
  | "EXTRA_VORTEX"
  | "EXTRA_FLOWER";
/**
 * 鼠标指针额外内容 enum:
 *  EXTRA_SONIC 索尼克;
 *  EXTRA_BOBOBOY 波波仔;
 *  EXTRA_SPONGE_BOB 海绵宝宝;
 *  EXTRA_PIG 猪头;
 *  EXTRA_POKE_BALL 精灵球;
 *  EXTRA_VORTEX 旋涡;
 *  EXTRA_FLOWER 花;
 */
enum ExtraEnum {
  /** 索尼克 */
  EXTRA_SONIC = "EXTRA_SONIC",
  /** 波波仔 */
  EXTRA_BOBOBOY = "EXTRA_BOBOBOY",
  /** 海绵宝宝 */
  EXTRA_SPONGE_BOB = "EXTRA_SPONGE_BOB",
  /** 猪头 */
  EXTRA_PIG = "EXTRA_PIG",
  /** 精灵球 */
  EXTRA_POKE_BALL = "EXTRA_POKE_BALL",
  /** 旋涡 */
  EXTRA_VORTEX = "EXTRA_VORTEX",
  /** 花 */
  EXTRA_FLOWER = "EXTRA_FLOWER",
}
/** 鼠标指针额外内容 */
const extra = {
  /** 索尼克 */
  [ExtraEnum.EXTRA_SONIC]: ExtraSonic,
  /** 波波仔 */
  [ExtraEnum.EXTRA_BOBOBOY]: ExtraBoboboy,
  /** 海绵宝宝 */
  [ExtraEnum.EXTRA_SPONGE_BOB]: ExtraSpongeBob,
  /** 猪头 */
  [ExtraEnum.EXTRA_PIG]: ExtraPig,
  /** 精灵球 */
  [ExtraEnum.EXTRA_POKE_BALL]: ExtraPokeBall,
  /** 旋涡 */
  [ExtraEnum.EXTRA_VORTEX]: ExtraVortex,
  /** 花 */
  [ExtraEnum.EXTRA_FLOWER]: ExtraFlower,
};

interface MousePointerProps {
  isCustom?: boolean;
  pointerName?: MousePointerType;
  hasExtra?: boolean;
  extraName?: ExtraType;
}
/** 自定义鼠标指针 */
const MousePointer = ({
  isCustom = false,
  pointerName,
  hasExtra = false,
  extraName,
}: MousePointerProps) => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);
  const [hasIcon, setHasIcon] = useBoolean(false);

  useEffect(() => {
    setHasIcon(hasExtra);
    if (hasExtra) {
      const olderOnMouseEnter = document.body.onmouseenter;
      const olderOnMouseMove = document.body.onmousemove;
      const olderOnMouseLeave = document.body.onmouseleave;
      document.body.onmouseenter = () => setHasIcon(true);
      document.body.onmousemove = () => setHasIcon(true);
      document.body.onmouseleave = () => setHasIcon(false);

      return () => {
        document.body.onmousedown = olderOnMouseEnter;
        document.body.onmousemove = olderOnMouseMove;
        document.body.onmouseleave = olderOnMouseLeave;
      };
    }
  }, [hasExtra, setHasIcon]);

  useEffect(() => {
    if (isCustom && pointerName) {
      document.body.style.cursor = `url(${mousePointer[pointerName]}), auto`;
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isCustom, pointerName]);

  return hasIcon ? (
    <div
      ref={ref}
      className="w-9 h-9 rounded fixed z-50"
      style={{ left: docX + 28, top: docY }}
    >
      {extraName && <Image src={extra[extraName]} />}
    </div>
  ) : (
    <React.Fragment />
  );
};

export default MousePointer;
