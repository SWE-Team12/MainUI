import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // React Router의 Navigate 임포트
import styled from "@emotion/styled";
import Issue_Status from './Issue_Status'; // Issue_Status 컴포넌트 import

export function Main_Page() {
	const [createdSortOrder, setCreatedSortOrder] = useState("asc");
	const [dueSortOrder, setDueSortOrder] = useState("asc");
	const [redirectToAdmin, setRedirectToAdmin] = useState(false);
	const [issues, setIssues] = useState([]);
	const navigate = useNavigate(); // useNavigate 훅 사용

	useEffect(() => {
        // Load issues from local storage when component mounts
        const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
        setIssues(storedIssues);
    }, []);

	const handleSort = (column) => {
        const sortedIssues = [...issues];
        if (column === "created") {
            sortedIssues.sort((a, b) => {
                const dateA = new Date(a.created);
                const dateB = new Date(b.created);
                return createdSortOrder === "asc" ? dateA - dateB : dateB - dateA;
            });
            setCreatedSortOrder(createdSortOrder === "asc" ? "desc" : "asc");
        } else if (column === "due") {
            sortedIssues.sort((a, b) => {
                const dateA = new Date(a.due);
                const dateB = new Date(b.due);
                return dueSortOrder === "asc" ? dateA - dateB : dateB - dateA;
            });
            setDueSortOrder(dueSortOrder === "asc" ? "desc" : "asc");
        }
        setIssues(sortedIssues);
    };

  const goToMainPage = () => {
    setRedirectToAdmin(false); // 리다이렉트 상태를 false로 설정하여 MainPage로 이동
  };

  const goToAdminPage = () => {
    setRedirectToAdmin(true); // 리다이렉트 상태를 true로 설정
  };

  const goToIssuePage = (issue) => {
    navigate('/issue', { state: { issue, comments: issue.comments, created: issue.created } }); // Pass additional data like comments and created
};

  const goToTicketPage = () => {
    navigate('/makeissue');
  };

  const addIssue = (newIssue) => {
    const updatedIssues = [newIssue, ...issues]; // Add the new issue at the beginning
    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
};

  if (redirectToAdmin) {
    return <Navigate to="/admin" replace={true} />; // AdminPage로 이동
  }

  return (
    <RootWrapperMain_Page>
      <Button>
        <TextContainer/>
      </Button>
      <Group2 onClick={goToTicketPage}>
        <Button_0001 >
          <TextContainer>
            <Label>
            </Label>
          </TextContainer>
        </Button_0001>
        <MakeIssue>
          Make Issue
        </MakeIssue>
      </Group2 >
      <Group4>
      </Group4>
      <Group3>
        <Rectangle1/>
        <Dashboard>
          Dashboard
        </Dashboard>
      </Group3>
      <Group8>
        <Rectangle1/>
        <Admin>
          Admin
        </Admin>
      </Group8>
	  <Title> 
        TITLE
      </Title>
      <Created onClick={() => handleSort("created")}>
        CREATED {createdSortOrder === "asc" ? "▲" : "▼"}
      </Created>
      <Due onClick={() => handleSort("due")}>
        DUE {dueSortOrder === "asc" ? "▲" : "▼"}
      </Due>
      <Status>
        STATUS
      </Status>
      <Reporter>
        Reporter
      </Reporter>
      <Assignee>
        Assignee
      </Assignee>
      <BestCandidate>
        best candidate
      </BestCandidate>
      <Number>
        #
      </Number>
      <MainLogo src={`${process.env.PUBLIC_URL}/img/main_logo.svg`} alt="Main Logo" />
      <Ellipse1/>
	  <DashBoard src={`${process.env.PUBLIC_URL}/img/dashboard.svg`} alt="Dash Board" onClick={goToMainPage} />
      <Ellipse2/>
      <Image14 src={`${process.env.PUBLIC_URL}/img/image14.svg`} alt="14" onClick={goToAdminPage} />
	  <IssueList>
			{issues.map((issue, index) => (
				<NewIssueInfo key={issue.id} style={{ top: `${170 + (index * 30)}px` }} onClick={() => goToIssuePage(issue)}>
				<IssueNumber>
					{issue.id} {/* 이슈 번호 표시 */}
				</IssueNumber> 
				<IssueTitleContainer>
					<IssueTitle>{issue.title}</IssueTitle>
				</IssueTitleContainer>
				<IssueCreated>{issue.created}</IssueCreated>
			</NewIssueInfo>
			))}
		</IssueList>
    </RootWrapperMain_Page>
  )
}

const RootWrapperMain_Page = styled.div`
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

const MainLogo = styled.img`
  width: 110px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 20px; /* Adjust left position as needed */
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

const Group2 = styled.div`
	width: 90px;
	height: 28px;
	position: absolute;
	left: 1288px;
	top: 85px;
`;

const Button_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 8px;
	border: solid 2px rgb(0, 120, 212);
	border-radius: 2px;
	width: 90px;
	height: 28px;
	background-color: white;
	box-sizing: border-box;
	padding: 6px 20px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Label = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: "Segoe UI", sans-serif;
	font-weight: 600;
	line-height: 20px;
	text-align: left;
`;

const MakeIssue = styled.span`
	color: rgb(0, 120, 212);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: "Segoe UI", sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: absolute;
	left: 11px;
	top: 4px;
`;

const Group4 = styled.div`
	width: 32px;
	height: 28px;
	position: absolute;
	left: 1392px;
	top: 77px;
`;

const Group3 = styled.div`
	width: 162px;
	height: 145px;
	position: absolute;
	left: 0px;
	top: 60px;
`;

const Rectangle1 = styled.div`
	width: 162px;
	height: 145px;
	background-color: rgb(0, 120, 212);
	position: absolute;
	left: 0px;
	top: 0px;
`;

const DashBoard = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  position: absolute;
  left: calc(4% - 27.5px); /* 가로 방향 중앙에 위치 */
  top: calc(12% - 27.5px); /* 세로 방향 중앙에 위치 */
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

const Title = styled.span`
  color: rgb(135, 135, 135);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 258px;
  top: 137px;
`;

const Created = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 542px;
	top: 137px;
`;

const Due = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 731px;
	top: 137px;
`;

const Status = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 828px;
	top: 137px;
`;

const Reporter = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 649px;
	top: 137px;
`;

const Assignee = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 1017px;
	top: 137px;
`;

const BestCandidate = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 1112px;
	top: 137px;
`;

const Number = styled.span`
	color: rgb(135, 135, 135);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 192px;
	top: 137px;
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

const Image14 = styled.img`
	width: 52px;
	height: 52px;
	object-fit: cover;
	position: absolute;
	left: 52px;
	top: 237px;
`; 

const IssueList = styled.div`
  margin-top: 0px;
  padding: 50px;
`;

const NewIssueInfo = styled.div`
    position: absolute;
    left: 258px; /* Same position as "TITLE" */
    top: 157px; /* Adjust the top position accordingly */
    cursor: pointer; /* Change cursor to indicate clickability */
`;

const IssueTitleContainer = styled.div`
    display: inline-block; /* Ensure the container only takes up the necessary width */
`;

const IssueTitle = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
`;

const IssueCreated = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    position: absolute;
    left: 285px; /* Same position as "CREATED" */
	white-space: nowrap; /* Prevent line breaks */
`;

const IssueNumber = styled.span`
  color: rgb(135, 135, 135);
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: -65px; /* Same position as "Number" */
  top: 4px; /* Same position as "TITLE" */
`;

export default Main_Page;