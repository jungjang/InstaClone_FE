import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <StHeaderWrap>
        <StHeadMenu>
          <div name="menu별스타그램아이콘">
            <StLogo
              alt="별스타그램아이콘"
              src="img/logo_img.png" /*onClick={() => {navigate("/")}*/
            />
          </div>
          <StImgTextWrap name="headerwrap">
            <StImgWrap
              name="home icon & 홈"
              onClick={() => {
                navigate("/");
              }}
            >
              <StImg alt="home buttom icon" src="img/home_img.png" />
              <div>홈</div>
            </StImgWrap>

            <StImgWrap
              name="create icon & 만들기"
              onClick={() => navigate("/post")}
            >
              <StImg alt="만들기용 + 아이콘" src="img/article_img.png" />
              <div>만들기</div>
            </StImgWrap>

            <StImgWrap
              name="profile icon & 프로필"
              onClick={() => navigate("/mypage")}
            >
              <StImg alt="profile icon" src="img/profile_img.png" />
              <div name="마이페이지로 보내주는 onClick들어갈 자리">프로필</div>
            </StImgWrap>
          </StImgTextWrap>
        </StHeadMenu>
      </StHeaderWrap>
    </>
  );
};

export default Header;

const StHeaderWrap = styled.div`
  background-color: white;
  /* position: fixed; */
  top: 0;
  width: 250px;
  border: 1px solid red;
`;

const StHeadMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 50px;
  margin: 20px 0 0 0px;
`;

const StImgTextWrap = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StLogo = styled.img`
  width: 150px;
`;

const StImg = styled.img`
  width: 25px;
  height: 25px;
`;

const StImgWrap = styled.div`
  border-radius: 15px;
  height: 35px;
  align-items: center;
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  &:hover {
    background-color: whitesmoke;
    transform: scale(1.02);
    font-size: 17px;
  }
  &:active {
    transform: scale(0.98);
    font-size: 15px;
  }
`;
