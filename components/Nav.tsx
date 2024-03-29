import Sportcards from "../app/Page";
import React from "react";
import ToggleMode from "./ToggleMode";
import CollectionSport from "./CollectionSport";

const Mode = () => {
  return (
    <div className="flex flex-col  w-full items-center">
      <ToggleMode />
      <Sportcards />
      <CollectionSport />
    </div>
  );
};

export default Mode;
