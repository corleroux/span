import React, { Children, createContext, PropsWithChildren, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  value: any[];
};

type IMenu = {
  isOpen: boolean;
  isTopicSet: boolean;
  topicSlug?: "";
};

const intialNavState: any[] = [];

export const NavContext = createContext(intialNavState);

export const NavProvider = (props: PropsWithChildren<Props>) => {
  const [nav, setNav] = useState<IMenu>({ isOpen: true, isTopicSet: false });
  console.log("NAV", nav);
  return <NavContext.Provider value={[nav, setNav]}>{props.children}</NavContext.Provider>;
};
