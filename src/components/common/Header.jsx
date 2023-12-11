import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Isearch, YoutubeLogo } from "../../icons";

const Header = () => {
  // const keyword = useParams();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  // 뒤로가기해도 해당 키워드 검색창 유지
  useEffect(() => {
    setValue(searchParams.get("search_query") || "");
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search_query=${value}`);
  };

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledWrap>
      {/* <Link to="/">1</Link>
      <Link to="/search">a</Link> */}
      <StyledLogo>
        <Link to="/">
          <YoutubeLogo />
        </Link>
      </StyledLogo>
      <StyledFormBox>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" onChange={handleOnchange} value={value} />
        </StyledForm>
        <StyledButton onClick={handleSubmit}>
          <Isearch />
        </StyledButton>
      </StyledFormBox>
    </StyledWrap>
  );
};

export default Header;

const StyledWrap = styled.header`
  display: flex;
  align-items: center;
  gap: 0 10px;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #ccc;
`;
const StyledLogo = styled.div`
  width: 90px;
  height: 20px;
`;
const StyledFormBox = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 40px;
`;
const StyledForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 40px;
  border-left: 1px solid #ccc;
  background-color: #f1f1f1;
`;
