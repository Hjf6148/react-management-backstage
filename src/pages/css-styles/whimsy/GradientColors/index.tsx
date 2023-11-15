import { Card, Space } from "antd";

/** 渐变色 */
const GradientColors = () => {
  const gradientColorsList = [
    {
      title: "神秘紫蓝渐变",
      desc: "这个渐变色从紫红色 (#c850c0) 渐变到深蓝色 (#4158d0)，营造出一种富有魅力和神秘感的效果。紫红色和深蓝色的结合创造了一种对比鲜明的视觉冲击。",
      colors: ["#c850c0", "#4158d0"],
    },
    {
      title: "天空蓝渐变",
      desc: "这个渐变色从淡蓝色 (#a1c4fd) 渐变到浅蓝色 (#c2e9fb)，营造出宁静和轻盈的天空蓝效果。",
      colors: ["#a1c4fd", "#c2e9fb"],
    },
    {
      title: "瑰丽紫红渐变",
      desc: "这个渐变色从鲜艳的红色 (#ff9a9e) 渐变到柔和的粉红色 (#fad0c4)，给人一种浪漫和瑰丽的感觉。",
      colors: ["#ff9a9e", "#fad0c4"],
    },
    {
      title: "温暖阳光渐变",
      desc: "这个渐变色从明亮的黄色 (#f6d365) 渐变到温暖的橙色 (#fda085)，营造出温暖和阳光的氛围。",
      colors: ["#f6d365", "#fda085"],
    },
    {
      title: "自然绿意渐变",
      desc: "这个渐变色从浅绿色 (#a8e063) 渐变到深绿色 (#56ab2f)，给人一种自然和清新的感觉。",
      colors: ["#a8e063", "#56ab2f"],
    },
    {
      title: "神秘暗夜渐变",
      desc: "这个渐变色从深蓝色 (#292a3a) 渐变到暗蓝色 (#536976)，给人一种神秘和夜晚的感觉。",
      colors: ["#292a3a", "#536976"],
    },
    {
      title: "多彩糖果渐变",
      desc: "这个渐变色使用了多个鲜艳的颜色，从紫红色 (#ff00cc) 渐变到橙色 (#ffcc00)，然后到青色 (#00ffcc)，最后到鲜艳的粉红色 (#ff0066)。它给人一种快乐、活力和多彩的感觉。",
      colors: ["#ff00cc", "#ffcc00", "#00ffcc", "#ff0066"],
    },
    {
      title: "星空夜幕渐变",
      desc: "这个渐变色从深蓝色 (#001f3f) 渐变到浅蓝色 (#0088a9)，然后到青绿色 (#00c9a7)，接着到淡绿色 (#92d5c6)，最后到非常浅的淡青色 (#ebf5ee)。它营造出一种神秘而宁静的星空夜幕效果。",
      colors: ["#001f3f", "#0088a9", "#00c9a7", "#92d5c6", "#ebf5ee"],
    },
    {
      title: "金属质感渐变",
      desc: "这个渐变色从深灰色 (#272727) 渐变到浅灰色 (#f9f9f9)，模拟了金属的质感。它给人一种现代、简洁而高级的感觉，适用于各种设计风格。",
      colors: [
        "#272727",
        "#4a4a4a",
        "#6d6d6d",
        "#909090",
        "#b3b3b3",
        "#d6d6d6",
        "#f9f9f9",
      ],
    },
    {
      title: "雪山冰川渐变",
      desc: "这个渐变色从淡蓝色 (#c7e9fb) 渐变到浅蓝色 (#35bef7)，营造出清凉和冰川的效果。它适用于需要表达清新和纯洁感的设计。",
      colors: ["#c7e9fb", "#a6defa", "#80d4f9", "#5bc9f8", "#35bef7"],
    },
    {
      title: "热带夏日渐变",
      desc: "这个渐变色从橙黄色 (#ffbe0c) 渐变到绿色 (#7aff0c)，营造出热带夏日的氛围。它给人一种明亮、活力和欢乐的感觉。",
      colors: ["#ffbe0c", "#ffda0c", "#fff70c", "#c2ff0c", "#7aff0c"],
    },
  ];

  return (
    <Card>
      <Space direction="vertical">
        {gradientColorsList.map((item) => (
          <div key={item.title} className="flex">
            <div
              className="w-24 h-24 mr-3"
              style={{
                background: `linear-gradient(135deg, ${item.colors.join(
                  ", "
                )})`,
              }}
            />
            <div className="flex-1">
              <div className="mb-2 text-base font-semibold">{item.title}</div>
              <div>{item.desc}</div>
            </div>
          </div>
        ))}
      </Space>
    </Card>
  );
};

export default GradientColors;
