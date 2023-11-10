import React from "react";
import { Card, Carousel, Image } from "antd";
import Cat1 from "../assets/images/cat1.jfif";
import Cat2 from "../assets/images/cat2.jpg";
import Cat3 from "../assets/images/cat3.webp";
import Cat4 from "../assets/images/cat4.jfif";

type ImgType = { key: string; title?: string; img: any };

const CarouselItem = ({ item }: { item: ImgType }) => {
  return (
    <div className="min-h-max">
      <Image
        src={item.img}
        title={item.title}
        alt={item.title}
        preview={false}
      />
    </div>
  );
};

const AutoPlayCarousel: React.FC = () => {
  const imgList: ImgType[] = [
    { key: "cat1", title: "猫猫1", img: Cat1 },
    { key: "cat2", title: "猫猫2", img: Cat2 },
    { key: "cat3", title: "猫猫3", img: Cat3 },
    { key: "cat4", title: "猫猫4", img: Cat4 },
  ];

  return (
    <Card>
      <Carousel autoplay>
        {imgList.map((item) => (
          <CarouselItem key={item.key} item={item} />
        ))}
      </Carousel>
    </Card>
  );
};

export default AutoPlayCarousel;
