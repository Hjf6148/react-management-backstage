import { Card, Radio, Space } from "antd";
import { useBoolean } from "react-use";
import { useState } from "react";
import MousePointer, { ExtraType, MousePointerType } from "./MousePointer";

const MouseIcon = () => {
  const [isCustomPointer, setIsCustomPointer] = useBoolean(false);
  const [pointerName, setPointerName] = useState<MousePointerType>();

  const [hasExtra, setHasExtra] = useBoolean(false);
  const [extraName, setExtraName] = useState<ExtraType>();

  return (
    <div>
      <Card>
        <Space className="w-full" direction="vertical" size={16}>
          <div>
            <span>是否开启自定义鼠标指针：</span>
            <Radio.Group
              options={[
                { label: "开启", value: true },
                { label: "关闭", value: false },
              ]}
              onChange={setIsCustomPointer}
              value={isCustomPointer}
              optionType="button"
              buttonStyle="solid"
            />
          </div>

          {isCustomPointer && (
            <Card>
              <Space direction="vertical">
                <Space>
                  自定义鼠标指针类型：
                  <Radio.Group
                    options={[{ label: "无", value: "" }]}
                    onChange={(e) => setPointerName(e.target.value)}
                    value={pointerName}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Space>
                <Radio.Group
                  options={[
                    { label: "三角渐变蓝", value: "TRIANGULAR_BLUE" },
                    { label: "三角渐变绿（青柠）", value: "TRIANGULAR_LIME" },
                    { label: "三角渐变咖啡", value: "TRIANGULAR_COFFEE" },
                  ]}
                  onChange={(e) => setPointerName(e.target.value)}
                  value={pointerName}
                  optionType="button"
                  buttonStyle="solid"
                />
                <Radio.Group
                  options={[
                    { label: "简约复古KUDA游标1", value: "KUDA_CURSORS_1" },
                    { label: "简约复古KUDA游标2", value: "KUDA_CURSORS_2" },
                    { label: "简约复古KUDA游标3", value: "KUDA_CURSORS_3" },
                    { label: "简约复古KUDA游标4", value: "KUDA_CURSORS_4" },
                    { label: "简约复古KUDA游标5", value: "KUDA_CURSORS_5" },
                  ]}
                  onChange={(e) => setPointerName(e.target.value)}
                  value={pointerName}
                  optionType="button"
                  buttonStyle="solid"
                />
                <Radio.Group
                  options={[
                    { label: "地球", value: "EARTH" },
                    { label: "夏日西瓜", value: "WATERMELON" },
                    { label: "暗黑破坏神", value: "DIABLO" },
                    { label: "简约黑白箭头", value: "PLAIN_CURSOR" },
                  ]}
                  onChange={(e) => setPointerName(e.target.value)}
                  value={pointerName}
                  optionType="button"
                  buttonStyle="solid"
                />
                <span>自定义指针位置相对标准图标：</span>
                <Radio.Group
                  options={[
                    { label: "简约白", value: "SIMPLE_WHITE" },
                    { label: "简约黄", value: "SIMPLE_YELLOW" },
                    { label: "折纸白", value: "ORIGAMI_WHITE" },
                    { label: "折纸黑", value: "ORIGAMI_BLACK" },
                    {
                      label: "崩坏：星穹铁道-银狼",
                      value: "HONKAI_STARRAILWAY_SILVERWOLF",
                    },
                    { label: "原神：神里绫华", value: "GENSHIN_SHENLILINGHUA" },
                    { label: "火山熔岩", value: "VOLCANIC_LAVA" },
                    { label: "简约燧石箭头", value: "MINIMALIST_FLINT_ARROWS" },
                    { label: "笔", value: "PEN" },
                    { label: "紫色小手", value: "PURPLE_HANDS" },
                  ]}
                  onChange={(e) => setPointerName(e.target.value)}
                  value={pointerName}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Space>
            </Card>
          )}
        </Space>
      </Card>

      <Card className="mt-2.5">
        <Space className="w-full" direction="vertical" size={16}>
          <div>
            <span>是否开启自定义鼠标指针：</span>
            <Radio.Group
              options={[
                { label: "开启", value: true },
                { label: "关闭", value: false },
              ]}
              onChange={setHasExtra}
              value={hasExtra}
              optionType="button"
              buttonStyle="solid"
            />
          </div>

          {hasExtra && (
            <Card>
              <Space direction="vertical">
                <Space>
                  自定义鼠标指针额外内容：
                  <Radio.Group
                    options={[{ label: "无", value: "" }]}
                    onChange={(e) => setExtraName(e.target.value)}
                    value={extraName}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Space>
                <Radio.Group
                  options={[
                    { label: "索尼克", value: "EXTRA_SONIC" },
                    { label: "波波仔", value: "EXTRA_BOBOBOY" },
                    { label: "海绵宝宝", value: "EXTRA_SPONGE_BOB" },
                    { label: "猪头", value: "EXTRA_PIG" },
                    { label: "精灵球", value: "EXTRA_POKE_BALL" },
                    { label: "旋涡", value: "EXTRA_VORTEX" },
                    { label: "花", value: "EXTRA_FLOWER" },
                  ]}
                  onChange={(e) => setExtraName(e.target.value)}
                  value={extraName}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Space>
            </Card>
          )}
        </Space>
      </Card>

      <MousePointer
        isCustom={isCustomPointer}
        pointerName={pointerName}
        hasExtra={hasExtra}
        extraName={extraName}
      />
    </div>
  );
};

export default MouseIcon;
