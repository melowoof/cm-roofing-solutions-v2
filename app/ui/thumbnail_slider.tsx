import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "../components/carousel";
import Image from "next/image";
import { projectsImg } from "./images";

export default function ThumbnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <div className=" 2xl:w-[70%] bg-background sm:w-[80%] w-[90%] mx-auto">
        <Carousel options={OPTIONS} className=" relative" isAutoPlay={true}>
          <SliderContainer className="gap-2">
            {projectsImg.map((image) => {
              return (
                <Slider
                  key={image}
                  className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
                  thumnailSrc={image}
                >
                  <Image
                    src={image}
                    width={1400}
                    height={800}
                    alt="image"
                    className="h-full object-cover rounded-lg w-full"
                  />
                </Slider>
              );
            })}
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
    </>
  );
}
