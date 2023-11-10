import { Card, Carousel, Radio, RadioChangeEvent } from "antd";
import { DotPosition } from "antd/es/carousel";
import { useState } from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const DotPositionCarousel: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>("top");

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };

  return (
    <Card>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        className="mb-2.5"
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Card>
  );
};

export default DotPositionCarousel;
