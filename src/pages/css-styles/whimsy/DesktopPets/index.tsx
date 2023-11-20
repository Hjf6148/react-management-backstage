import { useState } from "react";
import DesktopPets, { PetsType } from "./DesktopPets";
import { Card, Radio, Space } from "antd";
import { useBoolean } from "react-use";

const Pets = () => {
  const [isShowPets, setIsShowPets] = useBoolean(false);
  const [petsType, setPetsType] = useState<PetsType>();

  return (
    <Card>
      <Space className="w-full" direction="vertical" size={16}>
        <div>
          <span>是否显示桌宠：</span>
          <Radio.Group
            options={[
              { label: "开启", value: true },
              { label: "关闭", value: false },
            ]}
            onChange={setIsShowPets}
            value={isShowPets}
            optionType="button"
            buttonStyle="solid"
          />
        </div>

        {isShowPets ? (
          <Card>
            <Space direction="vertical">
              <span>桌宠类型：</span>
              <Radio.Group
                options={[
                  { label: "无", value: "" },
                  { label: "兔子", value: "RABBIT" },
                ]}
                onChange={(e) => setPetsType(e.target.value)}
                value={petsType}
                optionType="button"
                buttonStyle="solid"
              />
            </Space>
          </Card>
        ) : null}
      </Space>

      <DesktopPets type={petsType} />
    </Card>
  );
};

export default Pets;
