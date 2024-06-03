import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAllIssues } from './Issue_Information';
import Issue_Status from './Issue_Status'; // Import the Issue_Status component

export function Issue_Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const { issue } = location.state; // 위치 상태에서 선택된 이슈 받기
  const [issues, setIssues] = useState([]); // 이슈 목록 상태 초기화
  const [selectedIssue, setSelectedIssue] = useState(issue); // 선택된 이슈 상태 초기화
  const [selectedStatus, setSelectedStatus] = useState(issue.status || ''); // 선택된 상태 초기화
  const [comment, setComment] = useState(issue.comment); // 선택된 이슈의 코멘트 초기화
  const [editMode, setEditMode] = useState(false); // 편집 모드 상태

  useEffect(() => {
    const allIssues = getAllIssues();
    setIssues(allIssues);
    setSelectedIssue(issue);
    setSelectedStatus(issue.status);
    setComment(issue.comment);
  }, [issue.id]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleBlur = () => {
    setEditMode(false);
    console.log('Comment saved:', comment);
  };

  const handleClose = () => {
    navigate('/main');
  };

  const saveIssueChanges = () => {
    const updatedIssues = issues.map((item) =>
      item.id === issue.id
        ? { ...item, status: selectedStatus, comment: comment }
        : item
    );
    setIssues(updatedIssues);
    localStorage.setItem('issues', JSON.stringify(updatedIssues));
    navigate('/main');
  };

  return (
    <RootWrapperIssue_Page>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <Rectangle19>
        <Rectangle19_0001 />
        <Line3 />
        <Line4 />
      </Rectangle19>
      <Rectangle18 />
      <SaveButton onClick={saveIssueChanges}>Save Changes</SaveButton>
      <Rectangle20 />
      <Rectangle22 />
      <Rectangle23 />
      <Rectangle24 />
      <_01>01</_01>
      <Issue>ISSUE</Issue>
      <Assignee>Assignee</Assignee>
      <Group8>
        <Rectangle17 xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgb(75, 147, 254)"
            d="M 0 0 L 47 0 L 47 23 L 0 23 L 0 0 Z"
          />
        </Rectangle17>
        <Fixed>fixed</Fixed>
      </Group8>
      <>
        <SelectBox>
          <Fixed_0002 onChange={handleStatusChange} value={selectedStatus}>
            <option value="new">New</option>
            <option value="assigned">Assigned</option>
            <option value="fixed">Fixed</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </Fixed_0002>
        </SelectBox>
        <Fixed_0001>{selectedStatus}</Fixed_0001>
      </>

      <Rectangle21 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgb(0, 120, 212)"
          d="M 0 14 L 6.5 0 L 6.5 129 L 0 121.5 L 0 14 Z"
        />
      </Rectangle21>

      <StyledComment onDoubleClick={toggleEdit}>
        {editMode ? (
          <StyledTextArea
            value={comment}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <span>{comment || 'Double-click to add a comment'}</span>
        )}
      </StyledComment>

      <IssueInformation>Issue Information</IssueInformation>
      <Assignee_0001>Assignee</Assignee_0001>
      <Created>
        Created: {selectedIssue.created} {/* 수정: 생성일자 표시 */}
      </Created>
      <Status>Status</Status>
      <Due>Due</Due>
      <LastModifiedTime>Last Modified Time</LastModifiedTime>
      <Reporter>Reporter</Reporter>
      <Priority>Priority</Priority>
      <Image8
        src="grida://assets-reservation/images/39:57"
        alt="image of Image8"
      />
      <Image6
        src="grida://assets-reservation/images/39:46"
        alt="image of Image6"
      />
      <Line5 />
      <Line6 />
      <Line7 />
      <Line10 />
      <Line8 />
      <Line12 />
      <Line9 />
      <Line11 />
      <Ellipse2 />
      <Ellipse3 />
      <Ellipse4 />
      <IssueStatus>Issue Status</IssueStatus>
    </RootWrapperIssue_Page>
  );
}
const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4caf50; // 녹색 배경
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: fixed; // 위치를 고정시키기
  bottom: 20px; // 하단에서 20px의 위치
  left: 50%; // 화면의 가운데
  transform: translateX(-50%); // 완벽한 중앙 정렬을 위해
  z-index: 1000; // 다른 요소 위에 보이도록

  &:hover {
    background-color: #45a049; // 호버 시 색상 변경
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  max-height: 150px;
  overflow-y: auto;
  padding: 8px;
  border: 1px solid #ccc;
  resize: none;
  box-sizing: border-box;
`;

const StyledComment = styled.div`
  color: black;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 359px;
  top: 182px;
  right: 937px;
  background-color: white;
  padding: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2 and 6px rgba(0, 0, 0, 0.1);
`;

const SelectBox = styled.div`
  position: absolute;
  left: 1038px; // 왼쪽에서의 위치
  top: 373px; // 상단에서의 위치
  width: 100px; // 너비 설정
  height: 30px; // 높이 설정
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; // 배경색
  border: 1px solid #999; // 테두리
  border-radius: 5px; // 둥근 모서리
  box-sizing: border-box; // 박스 사이징 방식
  overflow: hidden; // 내용이 박스를 넘어가면 숨김
`;

const Fixed_0002 = styled.select`
  width: 100%; // 부모의 크기에 맞춤
  height: 100%; // 부모의 크기에 맞춤
  border: none; // 테두리 없음
  outline: none; // 선택시 테두리 없음
  background: transparent; // 배경 투명
  padding: 8px; // 좀 더 편안한 사용을 위한 내부 패딩
  cursor: pointer; // 마우스 오버 시 커서 변경
`;

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
