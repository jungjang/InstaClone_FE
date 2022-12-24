import React from "react";
import styled from "styled-components";
import Header from "../components/Home/Header";
import PostCard from "../components/Home/PostCard";

const Home = () => {
  return (
    <>
      <StHome>
        <Header />
        <StPostCardList>
          <PostCard />
        </StPostCardList>
      </StHome>
    </>
  );
};

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: row;
`;

const StPostCardList = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto 0 10%;
  /* align-items: center; */
`;
