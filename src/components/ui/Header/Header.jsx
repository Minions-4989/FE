import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeCookie } from '../../../utils/cookie';
import AuthContext from '../../../context/AuthContext';

const Header = () => {
  const search = '../src/assets/images/search.png';

  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);
  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const headerChange = () => {
    if (scrollPosition < 100) {
      headerRef.current.style = 'opacity:0';
    } else {
      headerRef.current.style = 'opacity:1';
    }
  };
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    headerChange();

    return () => window.removeEventListener('scroll', updateScroll);
  }, [scrollPosition]);

  const auth = useContext(AuthContext);

  const handleLogout = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Head>
        <RightFloatArea>
          <div>
            <img src={search} alt="" />
          </div>
        </RightFloatArea>

        <HeaderInner>
          <StyledLink to="/">
            <Logo
            // onClick={() => {
            //   sessionStorage.setItem("index", 1);
            // }}
            >
              로고
            </Logo>
          </StyledLink>
          <Nav>
            <NavCategory>NEW</NavCategory>
            <StyledLinkCategory to="/subpage">
              <NavCategory>APPAREL</NavCategory>
            </StyledLinkCategory>
            <NavCategory>UNIFORM</NavCategory>
            <NavCategory>ACCESSORIES</NavCategory>
            <NavCategory>COLLECTIBLES</NavCategory>
            <NavCategory>COLLABORATION</NavCategory>
            <NavCategory>SALE</NavCategory>
          </Nav>
          <UserArea>
            {isLoggedIn ? (
              <UserBtn onClick={handleLogout}>
                <StyledLink to="/">LOGOUT</StyledLink>
              </UserBtn>
            ) : (
              <UserBtn>
                <StyledLink to="/login">LOGIN</StyledLink>
              </UserBtn>
            )}
            <UserBtn>
              <StyledLink to="/signup">JOIN</StyledLink>
              {/* 로그인 되어 있다면 마이페이지 */}
            </UserBtn>
            <UserBtn>
              <StyledLink to="/cart">
                CART <CartCount>0</CartCount>
              </StyledLink>
            </UserBtn>
          </UserArea>
        </HeaderInner>
      </Head>
      <HeaderScrolled ref={headerRef}>
        <ScrolledLogo>로고</ScrolledLogo>
        <ScrolledInner>
          <ScrolledNav>
            <ScrolledCategory>NEW</ScrolledCategory>
            <StyledLinkCategory to="/subpage">
              <ScrolledCategory>APPAREL</ScrolledCategory>
            </StyledLinkCategory>
            <ScrolledCategory>UNIFORM</ScrolledCategory>
            <ScrolledCategory>ACCESSORIES</ScrolledCategory>
            <ScrolledCategory>COLLECTIBLES</ScrolledCategory>
            <ScrolledCategory>COOLABORATION</ScrolledCategory>
            <ScrolledCategory>SALE</ScrolledCategory>
          </ScrolledNav>
        </ScrolledInner>
      </HeaderScrolled>
    </>
  );
};

export default Header;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: #999;
  }
  &:hover {
    color: white;
  }
`;
const StyledLinkCategory = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    color: white;
  }
`;
const Head = styled.div`
  background-color: black;
`;
const RightFloatArea = styled.div`
  display: flex;
  float: right;
  color: white;
  margin-right: 5rem;
  margin-top: 1rem;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 100%;
  color: white;
`;
const Nav = styled.ul`
  display: flex;
  margin-left: 7.8rem;
`;
const UserArea = styled.div`
  display: flex;
  font-size: 12px;
  color: #999;
  letter-spacing: 0.03em;
  line-height: 3;
  margin-right: 5rem;
`;
const UserBtn = styled.div`
  margin-left: 1.5rem;
`;
const CartCount = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  color: white;
  line-height: 16px;
  text-align: center;
  font-size: 11px;
  border: 1px solid #be2d28;
  background-color: #be2d28;
  border-radius: 100px;
`;
const Logo = styled.div`
  margin-left: 7rem;
`;
const NavCategory = styled.li`
  padding: 8px 0 30px;
  margin: 3px 18px 0;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.08em;
`;
const HeaderScrolled = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const ScrolledInner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
`;
const ScrolledNav = styled.ul`
  display: flex;
`;
const ScrolledLogo = styled.div`
  float: left;
  color: white;
  margin-left: 5rem;
  position: absolute;
`;
const ScrolledCategory = styled.div`
  padding: 8px 0 10px;
  margin: 3px 18px 0;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.08em;
`;
