import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";
import React, { MouseEventHandler, useContext, useEffect, useState } from "react";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Basic } from "unsplash-js/dist/methods/users/types";
import { NavContext } from "../context/NavContext";
import { TopicContext } from "../context/TopicContext";
import { getTopicList, getTopicPhotos } from "../services/api";
import { MenuItem } from "./MenuItem";

type Props = {};

export const Menu = (props: Props) => {
  const { topic, setTopic, topics, setTopics } = useContext(TopicContext);
  const [nav, setNav] = useContext(NavContext);
  useEffect(() => {
    getTopicList().then((r) => {
      console.log("Topics from api", r);
      setTopics(r);
    });
  }, []);
  const onSelectTopic = (id: string, e: Event | undefined) => {
    console.log(e, id);
    setNav(() => ({ isOpen: false, isTopicSet: true }));
  };
  console.log("Topics", topics);
  return (
    <div className="bg-stone-200 rounded-t-2xl h-full w-fit p-12">
      {topics &&
        topics.map((m) => {
          return <MenuItem key={m.id} data={m} id={m.id} title={m.title} onClick={onSelectTopic} />;
        })}
    </div>
  );
};
