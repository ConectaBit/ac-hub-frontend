import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Layout = styled.div`
  width: 100vw;
`;

function Article() {
  return (
    <>
      <Header />
      <Layout>
        <Timeline>
        </Timeline>
      </Layout>
    </>
  );
}

export default Article;
