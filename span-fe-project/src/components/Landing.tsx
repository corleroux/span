import React, { useContext, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, DotsCircleHorizontalIcon, XCircleIcon } from "@heroicons/react/outline";
import { NavContext } from "../context/NavContext";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { Carousel } from "./Carousel/Carousel";

type Props = {};

export const Landing = (props: Props) => {
  const [nav, setNav] = useContext(NavContext);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heading = nav.isOpen ? "Choose Topic" : "Topic Name";
  const icon = nav.isOpen ? (
    <DotsCircleHorizontalIcon className="headerIcon" />
  ) : (
    <XCircleIcon className="headerIcon" />
  );
  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: -410,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: 410,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen flex bg-neutral-100 scroll-smooth">
      <div className="flex-1 w-7xl mx-auto p-10">
        <div className="grid grid-cols-[10%_75%_10%] gap-8">
          <div className="col-start-1 col-span-3 row-start-1 row-span-1 rounded-lg shadow-xl">
            <Header heading={heading} icon={icon} onClick={() => setNav({ ...nav, isOpen: true, isTopicSet: false })} />
          </div>
          {nav.isOpen && (
            <div className="col-start-1 col-span-3 row-start-2 row-span-2 bg-green-200 rounded-lg shadow-xl">
              <Menu />
            </div>
          )}
          {!nav.isOpen && (
            <>
              <div className="col-start-1 row-start-2 row-span-2 ">
                <ChevronLeftIcon className="" onClick={handlePrevious} />
              </div>
              <div className="col-start-2 row-start-2 row-span-2">
                <div className="flex flex-row flex-wrap overflow-x-hidden  snap-y snap-mandatory" ref={carouselRef}>
                  <Carousel />
                </div>
              </div>
              <div className="col-start-3 row-start-2 row-span-2">
                <ChevronRightIcon className="" onClick={handleNext} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
