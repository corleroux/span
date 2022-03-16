import React, { useEffect, useState } from "react";
import { getTopicList, getTopicPhotos } from "../../services/api";
import { CarouselItem } from "./CarouselItem";

type Props = {};

const testArr = new Array(10).fill("x");
console.log(testArr);
export const Carousel = (props: Props) => {
  const [photos, setPhotos] = useState<any[]>();
  useEffect(() => {
    getTopicPhotos({ topicIdOrSlug: "act-for-nature" })
      .then((photo) => photo.response?.results)
      .then((s) => {
        console.log(s);
        setPhotos(s);
      });
  }, []);

  return (
    // <div className="flex-1">
    //   <ul className=" justify-items-center ">
    <div className="grid grid-flow-col grid-cols-[repeat(4,400px)] grid-rows-[250px_250px] overflow-scroll gap-4">
      {photos &&
        photos.map((photo, index) => {
          console.log(photo);
          return <CarouselItem key={index} index={index} image={photo.urls.small} />;
        })}
      {/* {testArr.map((item, index) => {
          return <CarouselItem key={item + index} index={item} image={item} />;
        })} */}
    </div>
    //   </ul>
    // </div>
  );
};
