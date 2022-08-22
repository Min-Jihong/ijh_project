import styled from "@emotion/styled";

export const Body = styled.div`
  max-height: 80vh;
  padding: 80px 0 60px;
  overflow: scroll;
  margin-left: 50px;
  margin-right: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(#414345, #232526, #283048);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-size: 90px;
  line-height: 100px;
  text-transform: uppercase;
  margin-top: 0px;
  -webkit-animation: text-focus-in 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Contents = styled.div`
  box-sizing: border-box;
  text-align: center;
`;

export const Contlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-animation: focus-in-expand 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-expand 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const List = styled.div`
  flex: 0 0 31%;
  max-width: 31%;
  background: #d7dde8;
  margin: 0px 10px 0px 10px;
  border: 5px inset #c6c9d8;
  border-radius: 10px;
  word-wrap: break-word;
  &:last-of-type {
    margin-right: 0;
  }
  :hover {
    border: 5px outset #c6c9d8;
  }
`;

export const Icon = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
`;

export const ListInfo = styled.div`
  > h4 {
    // color: #e65245;
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > p {
    padding-left: 20px;
    padding-right: 20px;
    // color: #480048;
    // opacity: 0.75;
  }
`;
