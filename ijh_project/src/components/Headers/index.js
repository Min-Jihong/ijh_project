import React from "react";
import Injun from "../../commons/img/injun.jpg";
import {
  HeaderArea,
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  Logo,
  Menu,
  Mainmeun,
  Headerbtn,
  LogoWrapper,
  LogoTitle,
} from "./styles";

const Header = () => {
  return (
    <HeaderArea>
      <HeaderWrapper>
        <HeaderLeft>
          <LogoWrapper>
            <a href="/">
              <Logo src={Injun}></Logo>
            </a>
          </LogoWrapper>
        </HeaderLeft>
        <HeaderRight>
          <Mainmeun>
            <Menu>
              <li>
                <a href="/">HOME</a>
                <ul>
                  <li>
                    <a href="/">Main Demo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">이것저것</a>
                <ul>
                  <li>
                    <a href="/">Main Demo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">테스트용</a>
                <ul>
                  <li>
                    <a href="/">Main Demo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">메뉴에용</a>
                <ul>
                  <li>
                    <a href="/">Main Demo</a>
                  </li>
                </ul>
              </li>
            </Menu>
          </Mainmeun>
          <Headerbtn>
            <a href="/">
              <span>로그인</span>
            </a>
          </Headerbtn>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderArea>
  );
};

export default Header;
