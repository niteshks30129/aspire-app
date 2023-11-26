import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardView from "../DebitCard/CardView";
import "./index.css";
import { CardObject } from "../../types";

interface CarouselCardProps {
  cards: CardObject[];
  slideChange: any;
}

const CarouselCard: FC<CarouselCardProps> = ({ cards, slideChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ width: 434}}>
      <Slider {...settings} afterChange = {slideChange}>
        {cards.map((card: any) => (
          <CardView {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCard;
