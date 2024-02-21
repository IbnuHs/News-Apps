import React from "react";
import Jumbotron from "../Components/Jumbotron";
import TechnologyNews from "../Components/TechnologyNews";
import ALjazeeraNews from "./ALjazeeraNews";
import Genocide from "./Genocide";

export default function Homepages() {
  return (
    <div>
      <Jumbotron />
      <TechnologyNews />
      <ALjazeeraNews />
      <Genocide />
    </div>
  );
}
