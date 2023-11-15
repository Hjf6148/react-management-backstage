import { Card, Space } from "antd";
import "./index.css";

const InteractButtons = () => {
  function onRipples(e: any, className: string) {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.pageX - left;
    const y = e.pageY - top;
    const ripples = document.createElement("span");

    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    document.getElementsByClassName(className)[0].appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 2000);
  }

  const interactButtonsList: { title: string; button: JSX.Element }[] = [
    {
      title: "弹跳的3D微交互",
      button: (
        <button className="btn1">
          <span className="btn1_text">Click Me</span>
        </button>
      ),
    },
    {
      title: "带边框动画的按钮",
      button: <button className="btn2">Click Me</button>,
    },
    {
      title: "使用伪元素实现按钮悬停效果",
      button: <button className="btn3">Click Me</button>,
    },
    {
      title: "圆形按钮的边框动画",
      button: <button className="btn4">Click Me</button>,
    },
    {
      title: "涟漪微交互1",
      button: (
        <button className="btn5" onClick={(e) => onRipples(e, "btn5")}>
          Click Me
        </button>
      ),
    },
    {
      title: "涟漪微交互2",
      button: (
        <button className="btn6" onClick={(e) => onRipples(e, "btn6")}>
          Click Me
        </button>
      ),
    },
  ];

  return (
    <Card>
      <Space direction="vertical" size={18}>
        {interactButtonsList.map((item) => (
          <div key={item.title}>
            <p className="mb-2.5 font-semibold text-base">{item.title}</p>
            {item.button}
          </div>
        ))}
      </Space>
    </Card>
  );
};

export default InteractButtons;
