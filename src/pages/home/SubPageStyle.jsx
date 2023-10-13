import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  padding: 80px 5% 20px;
`;
export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SectionTitleText = styled.div`
  font-size: 28px;
  margin: 0 0 30px;
  padding: 0 0 18px;
`;
export const SectionTitleCategory = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  border: 1px solid #e1e1e1;
  color: #2e2e2e;
  padding: 12px 20px;
  margin: 0 3px 5px 3px;
  line-height: 14px;
  background-color: white;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid black;
    padding: 12px 20px;
    margin: 0 3px 5px 3px;
    line-height: 14px;
    cursor: pointer;
  }

  &.selected{
    color: white;
    background-color: black;
    border: 1px solid black;
    padding: 12px 20px;
    margin: 0 3px 5px 3px;
    line-height: 14px;
    cursor: pointer;
  }
`;
export const StyledLinkSelected = styled(Link)`
  color: white;
  background-color: black;
  border: 1px solid black;
  padding: 12px 20px;
  margin: 0 3px 5px 3px;
  line-height: 14px;
  cursor: pointer;
  &:link {
    text-decoration: none;
  }
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;
export const PaginationOl = styled.ol`
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: #939393;
`;
export const PaginationLi = styled.li`
  display: inline-block;
  width: 32px;
  border: 1px solid #d7d5d5;
  border-left: none;
  text-align: center;
  height: 32px;
`;
export const PaginationLiFirst = styled.div`
  display: inline-block;
  width: 32px;
  border: 1px solid #d7d5d5;
  text-align: center;
`;
export const PageBtn = styled.button`
  border: none;
  background: white;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  &.num {
    color: #9393af;
  }
  &.selected {
    border-bottom: 3px solid black;
    color: black;
    line-height: 2.3;
  }
`;
export const PageFirst = styled.button`
  border: none;
  border: 1px solid #d7d5d5;
  width: 34px;
  background-image: url("../src/assets/images/first.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const PagePrev = styled.button`
  border: none;
  border-top: 1px solid #d7d5d5;
  border-bottom: 1px solid #d7d5d5;
  width: 34px;
  background-image: url("../src/assets/images/prev.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const PageNext = styled.button`
  border: none;
  border-top: 1px solid #d7d5d5;
  border-bottom: 1px solid #d7d5d5;
  width: 34px;
  background-image: url("../src/assets/images/next.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const PageEnd = styled.button`
  border: none;
  border: 1px solid #d7d5d5;
  width: 34px;
  background-image: url("../src/assets/images/end.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const ItemListGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 5% 0;
`;
