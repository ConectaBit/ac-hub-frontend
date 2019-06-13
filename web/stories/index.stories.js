import React from "react";

import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";

import Header from "../src/components/header";
import Card from "../src/components/card";

storiesOf("Header", module)
  .add("without props", () => <Header />)
  .add("with items props", () => (
    <Header
      firstItem={{ label: "Explorar" }}
      secondItem={{ label: "Outras Bases" }}
      thirdItem={{ label: "Login" }}
      button={{ label: "Cadastre-se" }}
    />
  ));

storiesOf("Card", module)
  .add("without props", () => <Card />)
  .add("with props", () => (
    <Card
      title="Phisics"
      urlImage="https://pbs.twimg.com/media/D30x2DjXoAI2TW7.jpg"
    />
  ));
