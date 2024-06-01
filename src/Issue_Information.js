// Issue_Information.js

// 이슈 정보를 저장하는 함수
export const saveIssue = (issue) => {
    const existingIssues = JSON.parse(localStorage.getItem("issues")) || [];
    localStorage.setItem("issues", JSON.stringify([...existingIssues, issue]));
  };
  
  // 저장된 모든 이슈를 가져오는 함수
  export const getAllIssues = () => {
    return JSON.parse(localStorage.getItem("issues")) || [];
  };
