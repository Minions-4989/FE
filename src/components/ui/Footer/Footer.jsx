import styled from "styled-components";

const Footer = () => {
  const top = "../src/assets/images/top.png"
  const bottom = "../src/assets/images/bottom.png";

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goToBottom = () => {
    window.scrollTo({ top: 10000, behavior: "smooth" });
  };
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td width="5%" height="300" bgcolor="#1d1d1d"></td>
            <td width="90%" bgcolor="#1d1d1d">
              <table width="1500">
                <tbody>
                  <tr height="40"></tr>
                  <tr>
                    <td height="40">
                      <Span>이용약관</Span>
                      <Span>개인정보취급방침</Span>
                      <Span>이용안내</Span>
                      <Span>이벤트</Span>
                    </td>
                  </tr>
                  <tr height="60">
                    <td>
                      <Span>SKT CS T1</Span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <P>
                        회사명 : 에스케이텔레콤씨에스티원 주식회사 l CEO :
                        Joseph Patrick Marsh l 주소 : 서울특별시 강남구 선릉로
                        627 (논현동) l 사업자번호 : 614-81-05875
                      </P>

                      <P>
                        통신판매업 신고번호 : 제 2021-서울강남-02732호 l E-mail
                        : shop@t1.gg
                      </P>
                      <P>
                        안전거래를 위해 페이먼트구매안전(에스크로)에 가입하여
                        서비스를 제공하고 있습니다.
                      </P>
                      <P>
                        ☎ 02-6009-2500 (오후 12시 ~ 오후 4시 운영 / 공휴일 휴무)
                      </P>
                    </td>
                  </tr>
                  <tr>
                    <td height="40">
                      <P>저작권 © T1 Shop All Rights Reseved</P>
                    </td>
                  </tr>
                  <tr>
                    <td height="50"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="5%" bgcolor="#1d1d1d"></td>
          </tr>
        </tbody>
      </table>
      <ScrollBtnDiv>
        <img src={top} alt="" onClick={goToTop} />
        <img src={bottom} alt="" onClick={goToBottom} />
      </ScrollBtnDiv>
    </div>
  );
};

export default Footer;

const Span = styled.span`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-right: 30px;
`;
const P = styled.p`
  font-size: 16px;
  color: white;
  line-height: 24px;
`;
const ScrollBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`;
