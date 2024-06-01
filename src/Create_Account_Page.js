import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router의 Link 가져오기
import styled from "@emotion/styled";
import { Account_Info } from "./Account_Info";

export function Create_Account_Page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

  const newAccount = {
    name,
    password,
    email,
    role,
  };

  Account_Info(newAccount);
  alert("Account created successfully!");
};

  return (
    <RootWrapperCreate_Account_Page>
      <Button>
        <TextContainer/>
      </Button>
      <Rectangle32>
        <Input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Rectangle32>
      <Rectangle33>
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Rectangle33>
      <Rectangle37>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Rectangle37>
      <Rectangle38>
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select</option>
          <option value="admin">admin</option>
          <option value="PL">PL</option>
          <option value="dev">dev</option>
          <option value="tester">tester</option>
        </Select>
      </Rectangle38>
      <Rectangle36>
        <Input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Rectangle36>
      <Rectangle34>
        <MainLogo src={`${process.env.PUBLIC_URL}/img/main_logo.svg`} alt="Main Logo" />
      </Rectangle34>
      <EnterName>
        Enter name
      </EnterName>
      <CreateAccountTitle>
        Create Account
      </CreateAccountTitle>
      <EnterPassword>
        Enter password
      </EnterPassword>
      <EnterEmail>
        Enter email
      </EnterEmail>
      <SelectRole>
        Select role
      </SelectRole>
      <ConfirmPassword>
        Confirm password
      </ConfirmPassword>
      <Rectangle36_0001>
        {/* Create Account 버튼을 Link로 변경하여 로그인 페이지로 이동 */}
        <Link to="/">
          <CreateAccountButton onClick={handleCreateAccount}>
            Create Account
          </CreateAccountButton>
        </Link>
      </Rectangle36_0001>
    </RootWrapperCreate_Account_Page>
  );
}

const RootWrapperCreate_Account_Page = styled.div`
  min-height: 100vh;
  background-color: white;
  position: relative;
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

const Rectangle32 = styled.div`
  width: 449px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 266px;
  top: 484px;
`;

const Rectangle33 = styled.div`
  width: 449px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 266px;
  top: 763px;
`;

const Rectangle37 = styled.div`
  width: 449px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 266px;
  top: 623px;
`;

const Rectangle38 = styled.div`
  width: 449px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 760px;
  top: 623px;
`;

const Rectangle36 = styled.div`
  width: 449px;
  height: 61px;
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 760px;
  top: 763px;
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

const EnterName = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 266px;
  top: 446px;
`;

const CreateAccountTitle = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 50px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: left;
  position: absolute;
  left: 523px;
  top: 322px;
`;

const EnterPassword = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 266px;
  top: 725px;
`;

const EnterEmail = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 266px;
  top: 585px;
`;

const SelectRole = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 760px;
  top: 585px;
`;

const ConfirmPassword = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 25px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 760px;
  top: 725px;
`;

const Rectangle36_0001 = styled.div`
  width: 174px;
  height: 52px;
  background-color: rgb(0, 120, 212);
  border-radius: 10px;
  position: absolute;
  left: 266px;
  top: 852px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CreateAccountButton = styled.button`
  color: white;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-decoration: none; /* 밑줄 없애기 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
`;


export default Create_Account_Page;
