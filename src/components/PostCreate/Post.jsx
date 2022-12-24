import React, { useState } from "react";
import useNavigate from "react-router-dom";
import styled from "styled-components";

const Post = () => {
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileblob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileblob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onChangeImage = (e) => {
    encodeFileToBase64(e.target.files[0]);
    const img = e.target.file[0];
    const formData = new FormData();
    formData.append("image", img);
  };

  return (
    <>
      <StPostContainer name="포스트 전체 랩">
        <StPostHeader name="포스트 헤더 탭">
          <div name="뒤로가기버튼">
            <StImg
              alt="go main button"
              src="img/back.png" /*onClick={() => {navigate("/")}*/
            />
          </div>
          <StPostHeaderText>새 게시물 만들기</StPostHeaderText>
          <div>
            <StPostButton>공유하기</StPostButton>
          </div>
        </StPostHeader>
        <StPostBody name="포스트 사진, 본문 들어갈 자리">
          <StPostImgBox>
            {imageSrc && <StPreviewImg src={imageSrc} alt="preview-img" />}
            <input
              type="file"
              accept="image/*"
              name="post_img"
              onChange={onChangeImage}
            />
          </StPostImgBox>
          <StPostContent name="본문아이디, 텍스트 탭">
            <StNicknameArea>아이디 들어갈 자리</StNicknameArea>
            <StTextArea>본문 들어갈 자리</StTextArea>
          </StPostContent>
        </StPostBody>
      </StPostContainer>
    </>
  );
};

export default Post;

const StPostHeaderText = styled.div`
  font-weight: bold;
`;

const StPostButton = styled.button`
  background-color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: #0095f6;
`;

const StPreviewImg = styled.img`
  width: 500px;
`;

const StPostContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 750px;
`;

const StImg = styled.img`
  width: 25px;
`;

const StPostHeader = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: space-between;
`;

const StPostBody = styled.div`
  justify-content: space-between;
  display: flex;
  border: 1px solid red;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StPostImgBox = styled.div`
  border: 1px solid white;
  height: 500px;
  width: 500px;
  border-bottom-left-radius: 10px;
`;

const StPostContent = styled.div`
  border: 1px solid blue;
  border-bottom-right-radius: 10px;

  height: 500px;
  width: 250px;
`;

const StNicknameArea = styled.div`
  border: 1px solid purple;
  width: 240px;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const StTextArea = styled.textarea`
  width: 90%;
  border: 1px solid orange;
  height: 85%;
  margin-top: 10px;
  font-size: 15px;
  padding: 10px;
  resize: none;
`;