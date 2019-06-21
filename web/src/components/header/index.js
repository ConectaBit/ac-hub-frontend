import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  height: 4.4rem;
  width: 100vw;
  display: flex;
  background-color: ${props =>
  props.isLogged === true ? "#59D9D9" : "#FFFFFF"};
  border-top: 1px dotted #ccc;
  border-bottom: 1px dotted #ccc;
  justify-content: space-between;
`;

const ItemsGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  white-space: nowrap;
  font-size: 1.2rem;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: .5rem 1rem;
  margin: 0;
  color: ${props => (props.isLogged === true ? "#FFFFFF" : "#6b6b6b")};
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: ${props => (props.isLogged === true ? '#FFF' : '#59D9D9')};
    color: ${props => (props.isLogged === true ? '#59D9D9' : '#FFF')};
  }
`;

const Button = styled.div`
  border: 1px solid transparent;
  font-family: "Varela Round", sans-serif;
  transition: 0.3s;
  white-space: nowrap;
  text-decoration: none;
  align-content: center;
  padding: 1.5rem 5rem;
  font-weight: 500;
  vertical-align: middle;
  letter-spacing: 0.1rem;
  font-size: 1.5rem ${props => (props.primary ? "3rem" : "1.5rem")};
  box-sizing: border-box;
  background-color: ${props =>
    props.isLogged === true ? "#FFFFFF" : "#59D9D9"};
  color: ${props => (props.isLogged ? "#59D9D9" : "#FFFFFF")};

  :hover {
    cursor: pointer;
    background-color: ${props =>
      props.isLogged === true ? "#59D9D9" : "#FFF"};
    color: ${props => (props.isLogged ? "#FFF" : "#59D9D9")};
  }

  span {
    font-size: 1.2rem;
  }
`;

const Logo = styled.svg`
  height: 4.4rem;
  margin: auto .5rem;
  width: 3.9rem;
  color: #59d9d9;
`;

function Header(props) {
  return (
    <Wrapper isLogged={props.isLogged}>
      <ItemsGroup>
        <Logo
            viewBox="0 0 346 346"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M173 346C268.545 346 346 268.545 346 173C346 134.147 333.192 98.2848 311.567 69.4063C314.555 65.282 316.316 60.2113 316.316 54.7292C316.316 40.8969 305.103 29.6836 291.271 29.6836C285.789 29.6836 280.718 31.445 276.594 34.4326C247.715 12.8082 211.853 0 173 0C77.4547 0 0 77.4547 0 173C0 268.545 77.4547 346 173 346ZM266.225 54.7292C266.225 49.4217 267.876 44.4997 270.693 40.4489C243.365 20.2741 209.575 8.34853 173 8.34853C82.0655 8.34853 8.34853 82.0655 8.34853 173C8.34853 263.935 82.0655 337.651 173 337.651C263.935 337.651 337.651 263.935 337.651 173C337.651 136.425 325.726 102.635 305.551 75.3075C301.5 78.1238 296.578 79.7748 291.271 79.7748C277.438 79.7748 266.225 68.5615 266.225 54.7292ZM173 291.271C238.319 291.271 291.271 238.319 291.271 173C291.271 107.681 238.319 54.7292 173 54.7292C107.681 54.7292 54.7292 107.681 54.7292 173C54.7292 188.273 57.6241 202.869 62.8951 216.271C57.944 219.9 54.7292 225.758 54.7292 232.367C54.7292 243.382 63.6583 252.311 74.6729 252.311C77.8273 252.311 80.8106 251.579 83.4621 250.275C105.15 275.382 137.219 291.271 173 291.271ZM88.1985 247.024C108.833 270.643 139.174 285.563 173 285.563C235.167 285.563 285.564 235.167 285.564 173C285.564 110.833 235.167 60.4366 173 60.4366C110.833 60.4366 60.4369 110.833 60.4369 173C60.4369 187.306 63.1057 200.989 67.9725 213.577C70.0666 212.83 72.3223 212.424 74.6729 212.424C85.6875 212.424 94.6166 221.353 94.6166 232.367C94.6166 238.162 92.145 243.38 88.1985 247.024ZM172.536 217.062C196.615 217.062 216.134 197.542 216.134 173.464C216.134 149.385 196.615 129.866 172.536 129.866C148.458 129.866 128.938 149.385 128.938 173.464C128.938 197.542 148.458 217.062 172.536 217.062Z"
              fill={props.isLogged === true ? "#FFFFFF" : "#59d9d9"}
            />
          </Logo>
        <Item isLogged={props.isLogged}>
          {props.firstItem ? props.firstItem.label : null}
        </Item>
        <Item isLogged={props.isLogged}>
          {props.secondItem ? props.secondItem.label : null}
        </Item>
      </ItemsGroup>
      <ItemsGroup>
        <Item isLogged={props.isLogged}>
          {props.thirdItem ? props.thirdItem.label : null}
        </Item>
        <Button isLogged={props.isLogged}>
          <span>{props.children}</span>
        </Button>
      </ItemsGroup>
    </Wrapper>
  );
}

export default Header;
