import React from "react";
import * as S from "../Header1/Header1.style.js";

const MainHeader = () => {
  return (
      <S.Container>
        <S.Context>
          <p>메인</p>
          <p>소개</p>
          <p>서비스</p>
          <p>문의</p>
        </S.Context>
      </S.Container>
  );
};

export default MainHeader;
