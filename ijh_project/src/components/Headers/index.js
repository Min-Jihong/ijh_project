import React from "react";
import Injun from "../../commons/img/injun.jpg";
import Github from "../../commons/img/github.png";
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
} from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderArea>
      <HeaderWrapper>
        <HeaderLeft>
          <LogoWrapper>
            <Link to="/">
              <Logo src={Injun}></Logo>
            </Link>
          </LogoWrapper>
        </HeaderLeft>
        <HeaderRight>
          <Mainmeun>
            <Menu>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/intro">INTRO</Link>
              </li>
              <li>
                <Link to="/">CAREER</Link>
                <ul>
                  <li>
                    <Link to="/">모빌씨앤씨</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">PROJECT</Link>
                <ul>
                  <li>
                    <Link to="/">아모스</Link>
                  </li>
                  <li>
                    <Link to="/">아모레</Link>
                  </li>
                  <li>
                    <Link to="/">아이리스</Link>
                  </li>
                </ul>
              </li>
            </Menu>
          </Mainmeun>
          <Headerbtn>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Min-Jihong/ijh_project"
            >
              <img
                style={{ verticalAlign: "middle", width: "30px" }}
                src={Github}
                alt="깃헙"
              ></img>
              <span>Git Hub</span>
            </a>
          </Headerbtn>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderArea>
  );
};

export default Header;
