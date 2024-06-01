import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { getAllIssues } from './Issue_Information';
import Issue_Status from './Issue_Status'; // Import the Issue_Status component

export function Issue_Page() {
	const navigate = useNavigate();
	const location = useLocation();
	const { issue } = location.state; // Get the selected issue from location state
  
	// 저장된 모든 이슈 가져오기
	const allIssues = getAllIssues();

	// 선택한 이슈에 해당하는 정보 찾기
	const selectedIssue = allIssues.find(item => item.id === issue.id);

	const handleClose = () => {
	  navigate("/main");
	};

  	return (
    <RootWrapperIssue_Page>
		<CloseButton onClick={handleClose}>
			X
		</CloseButton>
      <Rectangle19>
        <Rectangle19_0001/>
        <Line3/>
        <Line4/>
      </Rectangle19>
      <Rectangle18/>
      <Rectangle20/>
      <Rectangle22/>
      <Rectangle23/>
      <Rectangle24/>
      <_01>
        01
      </_01>
      <Issue>
        ISSUE
      </Issue>
      <Assignee>
        Assignee
      </Assignee>
      <Group8>
        <Rectangle17 xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(75, 147, 254)" d="M 0 0 L 47 0 L 47 23 L 0 23 L 0 0 Z"/>
        </Rectangle17>
        <Fixed>
          fixed
        </Fixed>
      </Group8>
      <Rectangle21 xmlns="http://www.w3.org/2000/svg">
        <path fill="rgb(0, 120, 212)" d="M 0 14 L 6.5 0 L 6.5 129 L 0 121.5 L 0 14 Z"/>
      </Rectangle21>
      <Fixed_0001>
        Fixed
      </Fixed_0001>
      <Comment>
        Comment: {selectedIssue.comment} {/* 수정: 코멘트 내용 표시 */}
      </Comment>
      <IssueInformation>
        Issue Information
      </IssueInformation>
      <Assignee_0001>
        Assignee
      </Assignee_0001>
      <Created>
	  	Created: {selectedIssue.created} {/* 수정: 생성일자 표시 */}
      </Created>
	  <Status>
  			Status
	  </Status>
      <Due>
        Due
      </Due>
      <LastModifiedTime>
        Last Modified Time
      </LastModifiedTime>
      <Reporter>
        Reporter
      </Reporter>
      <Priority>
        Priority
      </Priority>
      <Image8 src="grida://assets-reservation/images/39:57" alt="image of Image8"/>
      <Image6 src="grida://assets-reservation/images/39:46" alt="image of Image6"/>
      <Line5/>
      <Line6/>
      <Line7/>
      <Line10/>
      <Line8/>
      <Line12/>
      <Line9/>
      <Line11/>
      <Ellipse2/>
      <Ellipse3/>
      <Ellipse4/>
      <IssueStatus>
        Issue Status
      </IssueStatus>
    </RootWrapperIssue_Page>
  )
}

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 400px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const RootWrapperIssue_Page = styled.div`
	min-height: 100vh;
	background-color: white;
	position: relative;
`;

const Rectangle19 = styled.div`
	width: 1112px;
	height: 1024px;
	background-color: white;
	position: absolute;
	left: 328px;
	top: 0px;
`;

const Rectangle19_0001 = styled.div`
	background-color: rgb(240, 240, 240);
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Line3 = styled.div`
	border-top: solid 1px black;
	position: absolute;
	left: 24px;
	top: 360px;
	right: 816px;
	bottom: 664px;
`;

const Line4 = styled.div`
	border-top: solid 1px black;
	position: absolute;
	left: 24px;
	top: 360px;
	right: 1022px;
	bottom: 664px;
`;

const Rectangle18 = styled.div`
	width: 328px;
	height: 1024px;
	background-color: rgb(223, 223, 223);
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle20 = styled.div`
	width: 276px;
	height: 124px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	background-color: white;
	border-radius: 10px;
	position: absolute;
	left: 27px;
	top: 77px;
`;

const Rectangle22 = styled.div`
	width: 925px;
	height: 67px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	background-color: white;
	border-radius: 10px;
	position: absolute;
	left: 353px;
	top: 79px;
`;

const Rectangle23 = styled.div`
	width: 925px;
	height: 93px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	background-color: white;
	border-radius: 10px;
	position: absolute;
	left: 353px;
	top: 172px;
`;

const Rectangle24 = styled.div`
	width: 925px;
	height: 301px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	background-color: white;
	border-radius: 10px;
	position: absolute;
	left: 352px;
	top: 291px;
`;

const _01 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 45px;
	top: 90px;
`;

const Issue = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 45px;
	top: 126px;
`;

const Assignee = styled.span`
	color: rgb(112, 110, 108);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 45px;
	top: 162px;
`;

const Group8 = styled.div`
	width: 47px;
	height: 23px;
	position: absolute;
	left: 86px;
	top: 90px;
`;

const Rectangle17 = styled.svg`
	width: 47px;
	height: 23px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Fixed = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	width: 37px;
	position: absolute;
	left: 7px;
	top: 1px;
`;

const Rectangle21 = styled.svg`
	width: 6px;
	height: 129px;
	position: absolute;
	left: 26px;
	top: 72px;
`;

const Fixed_0001 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 380px;
	top: 92px;
	right: 1017px;
	bottom: 912px;
`;

const Comment = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 359px;
	top: 182px;
	right: 937px;
	bottom: 822px;
`;

const IssueInformation = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 360px;
	top: 302px;
	right: 931px;
	bottom: 702px;
`;

const Assignee_0001 = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 359px;
	top: 340px;
	right: 1019px;
	bottom: 664px;
`;

const Created = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 359px;
	top: 377px;
	right: 1027px;
	bottom: 627px;
`;

const Status = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 835px;
	top: 380px;
	right: 561px;
	bottom: 624px;
`;

const Due = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 360px;
	top: 455px;
	right: 1053px;
	bottom: 549px;
`;

const LastModifiedTime = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 834px;
	top: 455px;
	right: 465px;
	bottom: 549px;
`;

const Reporter = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 359px;
	top: 415px;
	right: 1022px;
	bottom: 589px;
`;

const Priority = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 834px;
	top: 417px;
	right: 557px;
	bottom: 587px;
`;

const Image8 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 714px;
	top: 456px;
	right: 711px;
	bottom: 553px;
`;

const Image6 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 496px;
	top: 180px;
	right: 919px;
	bottom: 819px;
`;

const Line5 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 352px;
	top: 368px;
	right: 803px;
	bottom: 656px;
`;

const Line6 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 352px;
	top: 368px;
	right: 163px;
	bottom: 656px;
`;

const Line7 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 352px;
	top: 407px;
	right: 708px;
	bottom: 617px;
`;

const Line10 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 827px;
	top: 407px;
	right: 236px;
	bottom: 617px;
`;

const Line8 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 352px;
	top: 446px;
	right: 708px;
	bottom: 578px;
`;

const Line12 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 827px;
	top: 446px;
	right: 233px;
	bottom: 578px;
`;

const Line9 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 352px;
	top: 485px;
	right: 708px;
	bottom: 539px;
`;

const Line11 = styled.div`
	border-top: solid 1px rgb(223, 223, 223);
	position: absolute;
	left: 827px;
	top: 485px;
	right: 233px;
	bottom: 539px;
`;

const Ellipse2 = styled.div`
	background-color: rgb(75, 147, 254);
	border-radius: 10px / 10px;
	position: absolute;
	left: 364px;
	top: 97px;
	right: 1066px;
	bottom: 917px;
`;

const Ellipse3 = styled.div`
	background-color: rgb(75, 147, 254);
	border-radius: 10px / 10px;
	position: absolute;
	left: 1022px;
	top: 385px;
	right: 408px;
	bottom: 629px;
`;

const Ellipse4 = styled.div`
	background-color: rgb(254, 75, 75);
	border-radius: 10px / 10px;
	position: absolute;
	left: 1022px;
	top: 421px;
	right: 408px;
	bottom: 593px;
`;

const IssueStatus = styled.span`
	color: rgb(124, 121, 121);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Inter, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 364px;
	top: 119px;
	right: 985px;
	bottom: 885px;
`;

export default Issue_Page;