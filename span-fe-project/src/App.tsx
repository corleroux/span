import { useState } from "react";
import "./App.css";
import { getTopicList, getTopicPhotos } from "./services/api";
import { NavProvider } from "./context/NavContext";
import { Landing } from "./components/Landing";
import { initialTopic, TopicProvider } from "./context/TopicContext";
import { Carousel } from "./components/Carousel/Carousel";

function App() {
  const val: any[] = [];

  return (
    <NavProvider value={val}>
      <TopicProvider value={val}>
        <Landing />
      </TopicProvider>
    </NavProvider>
  );
}

export default App;
