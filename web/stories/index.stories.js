import React from "react";

import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";

import Header from "../src/components/header";
import Card from "../src/components/card";
import Cover from '../src/components/cover'

storiesOf("Header", module)
  .add("without props", () => <Header />)
  .add("with items props", () => (
    <Header
      firstItem={{ label: "Explorar" }}
      secondItem={{ label: "Outras Bases" }}
      thirdItem={{ label: "Login" }}
      button={{ label: "Cadastre-se" }}
    />
  ))
  .add("with props logged true", () => (
    <Header
      isLogged={true}
      firstItem={{ label: "Explorar" }}
      secondItem={{ label: "Outras Bases" }}
      thirdItem={{ label: "Login" }}
      button={{ label: "username" }}
    />
  ));

storiesOf("Card", module)
  .add("without props", () => <Card />)
  .add("with props", () => (
    <Card
      title="Phisics"
      urlImage="https://pbs.twimg.com/media/D30x2DjXoAI2TW7.jpg"
    />
  ))
  .add("loading", () => <Card isLoading={true} />);

storiesOf("Cover", module)
		.add("without props", () => (
			<Cover />
		))
		.add('with user props', () => (
			<Cover photoUrl='https://media.beliefnet.com/~/media/photos/entertainment/galleries/10-greatest-spiritual-characters-in-science-fiction/yoda-starwarsjpg.jpg?as=1&w=400'
			text='mestre_yoda'/>
		))
