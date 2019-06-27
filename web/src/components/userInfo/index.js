import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`;

const UserPhoto = styled.img`
  width: 10rem;
  height: 10rem;
`;

const UserDatas = styled.div`
    padding-top: .3rem;
    display: flex;
    justify-content: center;
    align-content: center;

    span{
        text-align: center;
        font-size: 1rem;
    }
`

function UserInfo(props) {
  return (
    <Wrapper>
      <UserPhoto />
      <UserDatas>
          <span>{props.username ||'Carregando...'}</span>
      </UserDatas>
    </Wrapper>
  );
}

export default UserInfo;
