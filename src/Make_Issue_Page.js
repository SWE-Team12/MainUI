import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { saveIssue } from './Issue_Information';
import { getAllIssues } from './Issue_Information';

export function Make_Issue_Page() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [commentBoxHeight, setCommentBoxHeight] = useState(500); // 초기 CommentBox 높이
  const [issueCount, setIssueCount] = useState(1); // 이슈 번호 카운트 상태 추가
  const textAreaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    updateCommentBoxHeight(); // Comment 입력이 변경될 때마다 CommentBox의 크기를 업데이트
  }, [comment]);

  useEffect(() => {
    // 페이지가 로드될 때마다 저장된 이슈 중 가장 큰 ID 값을 가져와서 1을 더하여 새로운 이슈의 ID로 사용
    const allIssues = getAllIssues();
    if (allIssues.length > 0) {
      const maxId = Math.max(...allIssues.map((issue) => issue.id));
      setIssueCount(maxId + 1);
    }
  }, []);

  const handleDashboardClick = () => {
    navigate('/main');
  };

  const updateCommentBoxHeight = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = 'auto';
    const newHeight = Math.max(300, textarea.scrollHeight); // 최소 높이는 100px
    setCommentBoxHeight(newHeight);
  };

  const handleMakeIssue = () => {
    if (!comment) {
      alert('Comment is required!');
      return;
    }

    const newIssue = {
      id: issueCount, // 수정: 이슈 번호를 사용하여 ID 생성
      title,
      comment,
      created: new Date().toISOString().split('T')[0],
    };

    saveIssue(newIssue);

    navigate('/main');
  };

  return (
    <RootWrapperMake_Issue_Page>
      <Button>
        <TextContainer />
      </Button>
      <Group3>
        <Rectangle1 />
        <Dashboard>Dashboard</Dashboard>
      </Group3>
      <Group8>
        <Rectangle1 />
        <Admin>Admin</Admin>
      </Group8>
      <MainLogo
        src={`${process.env.PUBLIC_URL}/img/main_logo.svg`}
        alt="Main Logo"
      />
      <Ellipse1 />
      <Ellipse2 />
      <DashBoard
        src={`${process.env.PUBLIC_URL}/img/dashboard.svg`}
        alt="Dash Board"
        onClick={handleDashboardClick}
      />
      <Image14 src={`${process.env.PUBLIC_URL}/img/image14.svg`} alt="14" />
      <Rectangle37>
        <Input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Rectangle37>
      <CommentBox style={{ height: `${commentBoxHeight}px` }}>
        <TextArea
          ref={textAreaRef}
          placeholder="Enter Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </CommentBox>
      <Title>Title</Title>
      <Comment>Comment</Comment>
      <MakeIssuePage>Make Issue</MakeIssuePage>
      <Button onClick={handleMakeIssue}>Make Issue</Button>
    </RootWrapperMake_Issue_Page>
  );
}
const RootWrapperMake_Issue_Page = styled.div`
  min-height: 100vh;
  background-color: white;
  position: relative;
`;

const Button = styled.button`
  /* 버튼 스타일 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: rgb(0, 120, 212);
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  left: calc(21% - 100px);
  top: 780px;
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

const CommentBox = styled.div`
  width: 1000px;
  min-height: 100px; /* 최소 높이 설정 */
  max-height: 1000px; /* 최대 높이 설정 */
  background-color: rgb(244, 242, 242);
  border: solid 1px rgb(152, 152, 152);
  border-radius: 10px;
  position: absolute;
  left: 300px;
  top: 429px; /* 위치 조정 */
  overflow: auto; /* 컨텐츠가 넘칠 때 스크롤바 표시 */
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px; /* 최소 높이 설정 */
  max-height: ${(props) =>
    props.lines * 20}px; /* 텍스트 줄 수에 따라 높이 조절 */
  border: none;
  background: none;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  resize: none; /* 사용자가 크기 조절을 못하도록 설정 */
  overflow-y: auto; /* 세로 스크롤바 표시 */
  line-height: 1.5; /* 줄 간격 설정 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 때 생략 부호 표시 */
  white-space: pre-wrap; /* 텍스트가 줄 바꿈되고, 공백 유지됨 */

  /* 스크롤바 스타일 조정 */
  scrollbar-width: thin; /* Firefox에서 스크롤바 너비 설정 */
  scrollbar-color: gray lightgray; /* Firefox에서 스크롤바 색상 설정 */
  &::-webkit-scrollbar {
    width: 8px; /* Chrome, Safari, Opera 스크롤바 너비 설정 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray; /* Chrome, Safari, Opera 스크롤바 색상 설정 */
    border-radius: 4px; /* Chrome, Safari, Opera 스크롤바 모서리 반경 설정 */
  }
`;

const Title = styled.span`
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

const Comment = styled.span`
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

const MakeIssuePage = styled.span`
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

export default Make_Issue_Page;
