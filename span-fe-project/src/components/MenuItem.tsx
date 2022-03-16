import React, { MouseEventHandler } from "react";

type Props = {
  title: string;
  id: string;
  data: any;
  onClick: (id: string, e: Event | undefined) => void;
};

export const MenuItem = (props: Props) => {
  const { title, id, total_photos } = props.data;
  return (
    <div onClick={() => props.onClick(props.id, event)} data-id={props.id}>
      <h3 className="mx-6 mb-2 text-lg text-gray-500">{props.title}</h3>
    </div>
  );
};
