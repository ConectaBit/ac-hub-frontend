import React, { useState } from "react";
import styled from "styled-components";
import { BookContent } from "styled-icons/boxicons-regular/BookContent";
import { DominoSpinner } from "react-spinners-kit";

const Box = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-family: "Varela Round", sans-serif;
    letter-spacing: 2px;
    display: block;
    margin: 0.5rem auto;
    font-size: 1rem;
    color: #7c9999;

    :hover {
      color: #ff82de;
      cursor: pointer;
    }
  }
`;

const IconBook = styled(BookContent)`
  color: inherit;
  font-size: 1rem;

  :hover {
    color: inherit;
  }
`;

/*const reposList = [
  { title: "repo1", link: "/repo1", id: 1 },
  { title: "repo2", link: "/repo2", id: 2 },
  { title: "repo3", link: "/repo3", id: 3 },
  { title: "repo4", link: "/repo4", id: 4 },
  { title: "repo5", link: "/repo5", id: 5 },
  { title: "repo6", link: "/repo6", id: 6 },
  { title: "repo7", link: "/repo6", id: 7 },
  { title: "repo8", link: "/repo6", id: 8 },
  { title: "repo9", link: "/repo6", id: 9 },
  { title: "repo10", link: "/repo6", id: 10 }
];
*/

function RepoList() {
  const [repos, setRepos] = useState(null);

  function handleReposReceived(repolist) {
    setRepos(repolist);
  }

  return (
    <Box>
      {repos ? (
        repos.map(repos => (
          <span key={repos.id}>
            {repos.title} <IconBook size={25} />
          </span>
        ))
      ) : (
        <DominoSpinner color="#59D9D9" size={10} sizeUnit="rem" />
      )}
    </Box>
  );
}

export default RepoList;
