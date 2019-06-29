import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RingSpinner } from "react-spinners-kit";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  position: fixed;
  top: 3rem;
  align-items: center;
  width: 12rem;
  height: 13.5rem;
  background-color: #fff;
`;

const UserPhoto = styled.img`
  width: 10rem;
  height: 10rem;
`;

const UserDatas = styled.div`
  padding-top: 0.3rem;
  display: flex;
  justify-content: center;
  align-content: center;

  span {
    text-align: center;
    font-size: 1.3rem;
  }
`;

const FETCH_USER_INFO = gql`
  query {
    currentUser {
      name
      photo
    }
  }
`;

function UserInfo() {
  const { data, loading } = useQuery(FETCH_USER_INFO);
  return (
    <Wrapper>
      {loading ? (
        <RingSpinner color="#2e9fff" size={6} sizeUnit={"rem"} />
      ) : (
        <>
        <UserPhoto src={data.currentUser.photo}/>
        <UserDatas>
          <span>{data.currentUser.name}</span>
        </UserDatas>
        </>
      )}
    </Wrapper>
  );
}

export default UserInfo;
