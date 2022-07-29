export const majorList = [
  "국어국문학과",
  "컴퓨터학부",
  "전자정보공학부 IT융합전공",
];

export const gradeList = ["17학번", "18학번", "19학번", "20학번"];

// 학과별 추천 리스트
export const byMajorList = [
  {
    major: "국어국문학과",
    bookList: ["국문추천1위", "국문2위", "국문3위"],
  },
  {
    major: "컴퓨터학부",
    bookList: ["컴추천1위", "컴추천2위", "컴추천3위"],
  },
  {
    major: "전자정보공학부 IT융합전공",
    bookList: ["전전공1위", "전전공2위", "전전공3위"],
  },
];

// 학번별 추천 리스트
export const byGradeList = [
  { grade: "17학번", bookList: ["17-1위", "17-2위", "17-3위"] },
  { grade: "18학번", bookList: ["18-1위", "18-2위", "18-3위"] },
  { grade: "19학번", bookList: ["19-1위", "19-2위", "19-3위"] },
  { grade: "20학번", bookList: ["20-1위", "20-2위", "20-3위"] },
];

// 외부데이터 활용한
export const byMajorAndGradeList = [
  {
    major: "국어국문학과",
    grade: "17학번",
    bookList: ["리코멘슈픽1", "리코멘슈픽2", "리코멘슈픽3", "리코멘슈픽4"],
  },
];
