import React, { useContext } from "react";
import {
  BeakerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsCircleHorizontalIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { NavContext } from "../context/NavContext";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { CarouselControls } from "./Carousel/CarouselControls";
import { Carousel } from "./Carousel/Carousel";

type Props = {};

export const Landing = (props: Props) => {
  const [nav, setNav] = useContext(NavContext);

  const heading = nav.isOpen ? "Choose Topic" : "Topic Name";
  const icon = nav.isOpen ? (
    <DotsCircleHorizontalIcon className="headerIcon" />
  ) : (
    <XCircleIcon className="headerIcon" />
  );
  const onClick = () => setNav({ ...nav, isOpen: true, isTopicSet: false });

  const handlePrevious = () => {};
  const handleNext = () => {};

  return (
    <div className="min-h-screen flex bg-neutral-100">
      <div className="flex-1 max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-[10%_80%_10%] gap-8">
          <div className="col-start-1 col-span-3 row-start-1 row-span-1 bg-fuchsia-300 rounded-lg shadow-xl">
            <Header heading={heading} icon={icon} onClick={() => setNav({ ...nav, isOpen: true, isTopicSet: false })} />
          </div>

          {nav.isOpen && (
            <div className="col-start-1 col-span-3 row-start-2 row-span-2 bg-green-200 rounded-lg shadow-xl">
              <Menu />
            </div>
          )}
          {!nav.isOpen && (
            <>
              <div className="col-start-1 row-start-2 row-span-2">
                <ChevronLeftIcon className="" />
              </div>
              <div className="col-start-2 row-start-2 row-span-2 snap-y">
                <div className="flex flex-col flex-wrap">
                  <Carousel />
                </div>
              </div>
              <div className="col-start-3 row-start-2 row-span-2">
                <ChevronRightIcon className="" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
