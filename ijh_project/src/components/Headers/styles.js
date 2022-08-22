import styled from "@emotion/styled";

export const HeaderArea = styled.header`
  background-color: black;
  padding-left: 30px;
  padding-right: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 0;
  div {
    box-sizing: border-box;
  }
`;

export const HeaderLeft = styled.div``;

export const LogoWrapper = styled.div`
  > a {
    display: block;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Mainmeun = styled.div`
  display: block;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  list-style: none;
  > li {
    margin: 0 15px;
    position: relative;
    > a {
      color: #c6c9d8;
      font-size: 16px;
      font-weight: 500;
      padding: 20px 0;
      display: inline-block;
    }
    > ul {
      min-width: 150px;
      height: auto;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 90;
      opacity: 0;
      visibility: hidden;
      background-color: #fff;
      box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
      text-align: left;
      padding: 12px 0;
      border-radius: 4px;
      li {
        a {
          font-size: 16px;
          font-weight: 500;
          padding: 5px 20px;
          font-size: 14px;
          display: block;
          color: #1f1f25;
          margin: 0 10px;
          border-radius: 3px;
        }
        &:hover {
          a {
            color: #f81f01;
            background: rgba(249, 0, 77, 0.07);
          }
        }
      }
    }
    &:hover {
      > ul {
        opacity: 1;
        visibility: visible;
      }
    }

    &:hover {
      > a {
        color: #f81f01;
        text-decoration: none;
      }
    }
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const Headerbtn = styled.div`
  margin-left: 50px;
  > a {
    padding: 0 25px;
    height: 46px;
    display: inline-block;
    line-height: 42px;
    border: 2px solid #b1b4c1;
    border-radius: 6px;
    color: #c6c9d8;
    font-size: 14px;
    position: relative;
    z-index: 2;
  }
`;
