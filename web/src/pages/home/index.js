import React, { useState } from "react";
import styled from "styled-components";
import "./logo.svg";
import { Github } from "styled-icons/boxicons-logos/Github";
import SideBar from "../../components/sideBar";
import gql from "graphql-tag";
import {useMutation} from '@apollo/react-hooks'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  margin: auto;
  justify-content: center;
  background-image: url("http://uploaddeimagens.com.br/images/002/161/572/full/marie.png?1561691068");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 6rem;
  span {
    font-size: 0.8rem;
    color: #ccc;
  }
`;

const Box = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 30%;
  height: 100%;
  text-align: center;
  align-self: flex-end;
  margin: 0;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Menu = styled.div`
  display: flex;
  color: #fff;
  position: fixed;
  top: 2rem;
  left: 2rem;
  text-align: center;
  padding-bottom: 0.8rem;
  box-sizing: border-box;

  :hover {
    cursor: pointer;
  }

  span {
    margin: auto 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;

    :hover {
      border-bottom: 1px solid #fff;
      transition: border 0.5s;
    }
  }
`;

const Logo = styled.div`
  flex: 1;
  height: 20rem;
  margin: 3rem auto;
`;

const IconGit = styled(Github)`
  color: inherit;
  width: 1rem;
  height: 1rem;
  margin: auto 0.3rem;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #72f0b8;
  padding: 0.9rem;
  font-size: 1rem;
  width: 20rem;
  margin: 0.5rem;
  transition: all 0.5s;

  :focus {
    border-bottom: 1px solid red;
  }
`;

const Title = styled.span`
  font-size: 3rem;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #ccc;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const ButtonLogin = styled.button`
  background-color: rgb(125, 76, 219);
  border: none;
  padding: 1rem;
  color: white;
  border-radius: 0.4rem;
  font-size: 1rem;
  flex: 1;
  transition: all 0.5s;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  align-items: stretch;
`;

const CREATE_TOKEN_MUTATION = gql`
  mutation createToken($email: String!, $password: String!) {
    createToken(email: $email, password: $password){
      token
    }
  }
`;

function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [createToken, {data, loading, error}] = useMutation(CREATE_TOKEN_MUTATION, {variables: {email: email, password: pass}})

  toast.configure()
  const notify = () => toast.warn("Prencha os campos corretamente");

  function validateForm(){
    if(error){
      toast.error("Email ou senha incorretos")
    }

    if(data){
      const token = data.createToken.token;
      localStorage.setItem("access-token", token)
      toast.success("Bem vindo, carái")
      return <Redirect to="/feed" />
    }
    return (!email || !pass) ? notify() : createToken()
  }
  return (
    <Layout>
      <Menu>
        <SideBar>
          <span>Cadastre-se</span>
        </SideBar>
      </Menu>
      <Box>
        <LoginForm>
          <Title>Login</Title>
          <Logo>
            <svg
              width="356"
              height="356"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="128" cy="128" r="128" fill="#DBDBDB" />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="256"
                height="256"
              >
                <circle cx="128" cy="128" r="128" fill="#DBDBDB" />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M98.5 66.5L107.5 85L105 153L107.5 146V262L60 192.5L74.5 137.5L80 146L98.5 66.5Z"
                  fill="#C4C4C4"
                />
                <path
                  d="M181.427 196.761L186.176 188.989L194.936 261.5H108V145.5L107.033 145.321L105.612 149.017L107.982 85.5H154.093L166.51 145.601L166.526 145.675L166.562 145.742L174.521 160.166L180.507 196.581L180.725 197.909L181.427 196.761Z"
                  fill="white"
                  stroke="#C4C4C4"
                />
                <path
                  d="M115 69.5H145.164L155.164 80H125L115 69.5Z"
                  fill="white"
                />
                <path
                  d="M148.387 32.2669C127.613 22.3314 128.606 23.8067 109.097 33.6217L148.387 32.2669Z"
                  fill="#C4C4C4"
                  stroke="#C4C4C4"
                />
                <path
                  d="M143.871 51.242L137.097 32.7258H121.29L111.806 51.242L104.581 60.2742L111.806 69.7581H143.871L152 60.2742L143.871 51.242Z"
                  fill="#C4C4C4"
                  stroke="#C4C4C4"
                />
                <path
                  d="M109.097 38.5968L119.935 40.8548L114.968 49.4355L104.581 43.5645L100.516 34.0806L109.097 38.5968Z"
                  fill="#C4C4C4"
                  stroke="#C4C4C4"
                />
                <path
                  d="M104.129 66.1451L101.871 30.4677C100.667 27.9086 97.8064 24.3258 96 30.4677"
                  stroke="#C4C4C4"
                  stroke-width="3"
                />
                <path
                  d="M136.194 44.9193L137.548 39.0483L133.484 44.0161H124.903L119.935 39.9516L121.29 44.9193H123.097L124 47.629H126.71L129.871 49.887L131.677 47.629H133.484L134.839 44.9193H136.194Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M137.548 33.1774L138.452 35.4355L137.548 36.7903L136.645 33.1774L120.387 33.629M120.387 33.629L119.032 35.8871L119.935 36.7903L120.387 33.629Z"
                  stroke="white"
                />
                <path
                  d="M129.5 18.5L135.5 28.5H120.5L124.5 21.5L122.5 18.5L124.5 17L129.5 18.5Z"
                  fill="#C4C4C4"
                />
                <path
                  d="M130.5 66.5H160.5L154.5 79.5H124.5L130.5 66.5Z"
                  fill="white"
                />
              </g>
            </svg>
          </Logo>
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            required
            onChange={e => setPass(e.target.value)}
          />
          <Flex>
            <ButtonLogin onClick={() => validateForm()} >Entrar</ButtonLogin>
          </Flex>
        </LoginForm>
        <Footer>
          <span>&copy; 2019 WTCS - Elixir</span>
          <IconGit />
        </Footer>
      </Box>
    </Layout>
  );
}

export default Home;
