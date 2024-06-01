import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import './App.css';
import CreateAccount from './Create_Account_Page';
import MainPage from './Main_Page';
import AdminPage from './Admin_Page';
import IssuePage from "./Issue_Page";
import MakeIssuePage from "./Make_Issue_Page";
import { authenticateUser } from './Account_Info';

function App() {
  return (
    <Router>
      <RootWrapperApp>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<LogInPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/issue" element={<IssuePage />} />
          <Route path="/makeissue" element={<MakeIssuePage />} />
        </Routes>
      </RootWrapperApp>
    </Router>
  );
}

function LogInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    navigate('/create-account');
  };

  const handleSignInClick = () => {
    const user = authenticateUser(email, password);
    if (user) {
      navigate('/main');
    } else {
      alert("Invalid email or password!");
    }
  };


  return (
    <WebLogInPage>
      <Button>
        <TextContainer />
      </Button>
      <WelcomeToTicketTracker>
        Welcome to Ticket Tracker
      </WelcomeToTicketTracker>
      <EmailInput
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Rectangle34>
        <MainLogo src={`${process.env.PUBLIC_URL}/img/main_logo.svg`} alt="Main Logo" />
      </Rectangle34>
        <SignInButton onClick={handleSignInClick}>
          Sign in
        </SignInButton>
      <AllInOneTicketToolToManageAllYourIssuesAtOnce>
        All-in-one ticket tool to manage all your issues at once!
      </AllInOneTicketToolToManageAllYourIssuesAtOnce>
      <SignUpButton onClick={handleSignUpClick}>
        Sign up
      </SignUpButton>
      <PleaseEnterYourLogInDetails>
        Please enter your log in details
      </PleaseEnterYourLogInDetails>
      <EmailLabel>
        Email
      </EmailLabel>
      <PasswordLabel>
        Password
      </PasswordLabel>
    </WebLogInPage>
  );
}

const RootWrapperApp = styled.div`
  position: relative;
`;

const WebLogInPage = styled.div`
  width: 1440px;
  height: 1024px;
  overflow: hidden;
  background-color: white;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 8px;
  border-radius: 2px;
  width: 1440px;
  height: 1024px;
  background-color: rgb(224, 224, 224);
  box-sizing: border-box;
  padding: 6px 20px;
  position: absolute;
  left: calc((calc((50% + 0px)) - 720px));
  top: 0px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  flex: none;
  box-sizing: border-box;
  padding: 0px 0px 3px;
`;

const WelcomeToTicketTracker = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 70px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  text-align: left;
  position: absolute;
  left: calc((calc((50% + 2px)) - 448px));
  top: 311px;
`;

const EmailInput = styled.input`
  width: 897px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 255px;
  top: 658px;
  padding-left: 10px;
  font-size: 20px;
`;

const PasswordInput = styled.input`
  width: 897px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 255px;
  top: 786px;
  padding-left: 10px;
  font-size: 20px;
`;

const Rectangle34 = styled.div`
  width: 179px;
  height: 179px;
  background-color: rgb(0, 120, 212);
  border-radius: 20px;
  position: absolute;
  left: 630px;
  top: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 270px;
  height: 270px;
  object-fit: contain;
`;

const AllInOneTicketToolToManageAllYourIssuesAtOnce = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: 200;
  text-align: left;
  position: absolute;
  left: 340px;
  top: 410px;
`;

const SignInButton = styled.button`
  background-color: #0078d4;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  position: absolute;
  left: calc(24.5% - 90px);
  top: 875px;
`;


const SignUpButton = styled.button`
  text-overflow: ellipsis;
  font-size: 23px;
  font-weight: normal;
  text-align: left;
  position: absolute;
  left: 255px;
  top: 944px;
  cursor: pointer;
  background: none;
  border: none;
  color: #0078d4;
  text-decoration: underline;
  padding: 10px 20px;
  font-family: Inter, sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const PleaseEnterYourLogInDetails = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 502px;
  top: 543px;
`;

const EmailLabel = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 255px;
  top: 620px;
`;

const PasswordLabel = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 255px;
  top: 748px;
`;

export default App;
