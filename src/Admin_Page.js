import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Adminpage() {
  const [projectNumber, setProjectNumber] = useState("");
  const [project, setProject] = useState("");
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/main");
  };

  return (
    <RootWrapperAdminPage>
      <Button>
        <TextContainer />
      </Button>
      <Group3>
        <Rectangle1 />
        <Dashboard>
          Dashboard
        </Dashboard>
      </Group3>
      <Group8>
        <Rectangle1 />
        <Admin>
          Admin
        </Admin>
      </Group8>
      <MainLogo src={`${process.env.PUBLIC_URL}/img/main_logo.svg`} alt="Main Logo" />
      <Ellipse1 />
      <Ellipse2 />
      <DashBoard src={`${process.env.PUBLIC_URL}/img/dashboard.svg`} alt="Dash Board" onClick={handleDashboardClick} />
      <Image14 src={`${process.env.PUBLIC_URL}/img/image14.svg`} alt="14" />
      <Rectangle37>
      <Input
          type="project"
          placeholder=""
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </Rectangle37>
      <Rectangle38>
      <Select
          value={projectNumber}
          onChange={(e) => setProjectNumber(e.target.value)}
        >
          <option value="">Select</option>
          <option value="PL">PL</option>
          <option value="dev">dev</option>
          <option value="tester">tester</option>
          {/* Add more project numbers as needed */}
        </Select>
      </Rectangle38>
      <ProjectAdd>
        Project Add
      </ProjectAdd>
      <ProjectNumberToAssign>
        Add Account
      </ProjectNumberToAssign>
      <AdminPage>
        Admin Page
      </AdminPage>
    </RootWrapperAdminPage>
  )
}
const RootWrapperAdminPage = styled.div`
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
	height: 60px;
	background-color: rgb(0, 120, 212);
	box-sizing: border-box;
	padding: 6px 20px;
	position: absolute;
	left: calc((calc((36.8% + 0px)) - 720px));
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

const AlarmIcon = styled.img`
	width: 34px;
	height: 34px;
	object-fit: cover;
	position: absolute;
	left: 1331px;
	top: 13px;
`;

const SearchIcon = styled.img`
	width: 28px;
	height: 28px;
	object-fit: cover;
	position: absolute;
	left: 1274px;
	top: 16px;
`;

const MyPageIcon = styled.img`
	width: 41px;
	height: 41px;
	object-fit: cover;
	position: absolute;
	left: 1387px;
	top: 8px;
`;

const Group3 = styled.div`
width: 162px;
height: 145px;
position: absolute;
left: 0px;
top: 60px;
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

const Rectangle1 = styled.div`
width: 162px;
height: 145px;
background-color: rgb(0, 120, 212);
position: absolute;
left: 0px;
top: 0px;
`;

const Dashboard = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 17px;
font-family: Inter, sans-serif;
font-weight: 600;
text-align: left;
width: 97px;
min-height: 24px;
position: absolute;
left: calc((calc((50% + -0px)) - 48px));
top: 106px;
height: 24px;
`;

const Group8 = styled.div`
width: 162px;
height: 145px;
position: absolute;
left: 0px;
top: 205px;
`;

const Admin = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 17px;
font-family: Inter, sans-serif;
font-weight: 600;
text-align: left;
width: 55px;
min-height: 24px;
position: absolute;
left: calc((calc((50% + -4px)) - 27px));
top: 108px;
height: 24px;
`;

const MainLogo = styled.img`
  width: 110px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 20px; /* Adjust left position as needed */
`;

const Ellipse1 = styled.div`
width: 68px;
height: 68px;
background-color: white;
border-radius: 68px / 68px;
position: absolute;
left: 44px;
top: 84px;
`;

const Ellipse2 = styled.div`
width: 68px;
height: 68px;
background-color: white;
border-radius: 68px / 68px;
position: absolute;
left: 44px;
top: 229px;
`;

const DashBoard = styled.img`
width: 55px;
height: 55px;
object-fit: cover;
position: absolute;
left: 50px;
top: 92px;
`;

const Image14 = styled.img`
width: 52px;
height: 52px;
object-fit: cover;
position: absolute;
left: 52px;
top: 237px;
`;

const Rectangle37 = styled.div`
width: 449px;
height: 61px;
background-color: rgb(244, 242, 242);
border: solid 1px rgb(152, 152, 152);
border-radius: 10px;
position: absolute;
left: 300px;
top: 289px;
`;

const Rectangle38 = styled.div`
width: 449px;
height: 61px;
background-color: rgb(244, 242, 242);
border: solid 1px rgb(152, 152, 152);
border-radius: 10px;
position: absolute;
left: 300px;
top: 429px;
`;

const ProjectAdd = styled.span`
color: black;
text-overflow: ellipsis;
font-size: 25px;
font-family: Inter, sans-serif;
font-weight: 400;
text-align: left;
position: absolute;
left: 300px;
top: 251px;
`;

const ProjectNumberToAssign = styled.span`
color: black;
text-overflow: ellipsis;
font-size: 25px;
font-family: Inter, sans-serif;
font-weight: 400;
text-align: left;
position: absolute;
left: 300px;
top: 391px;
`;

const AdminPage = styled.span`
color: black;
text-overflow: ellipsis;
font-size: 50px;
font-family: Inter, sans-serif;
font-weight: 700;
text-align: left;
position: absolute;
left: 574px;
top: 120px;
`;

export default Adminpage;
