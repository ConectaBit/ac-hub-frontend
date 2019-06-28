import React from "react";
import styled from "styled-components";
import { HomeAlt } from "styled-icons/boxicons-regular/HomeAlt";
import { Wpexplorer } from "styled-icons/fa-brands/Wpexplorer";
import { Group } from "styled-icons/material/Group";
import { LogOut } from "styled-icons/feather/LogOut";
import { Link } from "react-router-dom";

const HomeIcon = styled(HomeAlt)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;

  :hover {
    cursor: pointer;
  }
`;

const ExploreIcon = styled(Wpexplorer)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;

  :hover {
    cursor: pointer;
  }
`;

const GroupIcon = styled(Group)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;

  :hover {
    cursor: pointer;
  }
`;

const LogoutIcon = styled(LogOut)`
  width: 2rem;
  height: 2rem;
  color: #ff5047;
  align-self: center;

  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.header`
  height: 2.5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  position: sticky;
  top: 0;
`;

const IconsWrapper = styled.div`
  display: flex;
  min-width: 15rem;
  align-items: center;
  justify-content: space-around;
`;

function Header() {
  return (
    <Wrapper>
      <IconsWrapper>
        <HomeIcon />
        <ExploreIcon />
        <GroupIcon />
        <Link to='logout'>
        <LogoutIcon />
        </Link>
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;
