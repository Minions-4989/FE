import styled from "styled-components";
export const Section = styled.div`
  padding: 60px 5% 0;
  display: flex;
  max-width: 1250px;
  margin: auto;
  margin-bottom: 10rem;
`;
export const ProductImg = styled.div`
  width: 60%;
  position: relative;
  border: 1px solid #ececec;
  img {
    width: 100%;
  }
  @media all and (max-width: 1362px) {
    max-height: 417px;
  }
  @media all and (max-width: 1310px) {
    max-height: 402px;
  }
  @media all and (max-width: 1275px) {
    max-height: 383px;
  }
  @media all and (max-width: 1235px) {
    max-height: 364px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    max-height: 600px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    height: auto;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
  }

  .slick-dots {
    display: flex !important;
    justify-content: flex-start;
    position: absolute;
    bottom: -30px;
  }

  .slick-dots li {
    width: 95px;
    height: auto;
    margin: 0 0px;
    padding: 0 15px 0 0;
  }

  .slick-dots li button {
    width: auto;
    height: auto;
  }

  .slick-dots li button:before {
    width: 100px;
    height: 100px;
    background-size: 100px !important;
    background: url(${(props) => props.default});
    font-size: 0px;
    opacity: 0.35;
  }
  ${(props) =>
    props.default &&
    props.default
      .map(
        (img, index) => `
    .slick-dots li:nth-child(${index + 1}) button:before {
      background: url(${img});
    }
  `
      )
      .join("")}

  .slick-dots li.slick-active button:before {
    opacity: 0.95;
  }
`;
export const ImgArea = styled.div`
  width: 60%;
  min-width: 600px;
  max-height: 454px;
  display: flex;
  justify-content: center;
`;
export const InfoArea = styled.div`
  width: 35%;
  min-width: 438px;
  padding-left: 5%;
`;
export const ProductTitle = styled.div`
  display: flex;
  font-size: 21px;
  margin-bottom: 22px;
  padding: 50px 0 0;
`;
export const ProductPrice = styled.div`
font-size: 28px;
color: #222;
font-weight: bold;
}
`;
export const SoldOut = styled.div`
  margin-left: 0.5rem;
`;
export const TalbeRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  margin: 1rem 0;
  padding: 2rem 0;
  font-size: 13px;
  font-weight: 400;
  width: 100%;
`;
export const TableHead = styled.div`
  padding-right: 3rem;
`;
export const TableData = styled.div`
  width: 80%;
`;
export const Options = styled.select`
  border: 1px solid #d5d5d5;
  padding: 0.3rem;
  width: 100%;
`;
export const OptionSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 15px 14px;
  font-size: 12px;
  color: #888784;
  margin: 1rem 0;
`;
export const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const InputNumber = styled.input`
  width: 1rem;
  height: 17px;
  text-align: center;
  border: 1px solid #d4d8d9;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #6b6a6c;
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputBtnImgDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountUpBtn = styled.button`
  border-top: 1px solid #d4d8d9;
  border-right: 1px solid #d4d8d9;
  border-bottom: 1px solid #d4d8d9;
  border-left: none;
  border-top-right-radius: 2px;
  width: 20px;
  height: 10.5px;
  background-image: url("../src/assets/images/up.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const CountDownBtn = styled.button`
  border-top: none;
  border-right: 1px solid #d4d8d9;
  border-bottom: 1px solid #d4d8d9;
  border-left: none;
  border-bottom-right-radius: 2px;
  width: 20px;
  height: 10.5px;
  background-image: url("../src/assets/images/down.gif");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const SelectedOptionPrice = styled.div`
  font-weight: bold;
  color: #222222;
`;
export const DeleteOptionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  cursor: pointer;
  width: 12px;
  height: 12px;
  background: url("../src/assets/images/x.gif");
  background-repeat: no-repeat;
`;
export const TotalPriceDiv = styled.div`
  text-align: right;
  margin-bottom: 2rem;
  font-size: 13px;
`;
export const TotalPriceSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
// export const BuyBtn = styled.button`
//   color: white;
//   background-color: black;
//   box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.3);
//   padding: 22px 35px 23px;
//   font-weight: bold;
//   font-size: 25px;
//   letter-spacing: 3px;
//   text-align: center;
//   border: none;
//   width: 100%;
//   cursor: pointer;
// `;

export const LowBtnArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LowBtn = styled.button`
  display: inline-block;
  width: 49%;
  font-weight: 400;
  margin: 4px 0 0 0;
  background-color: white;
  color: #222222;
  border: 1px solid #ccc;
  padding: 15px 20px;
  font-size: 15px;
  text-align: center;
  margin-top: 1rem;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
