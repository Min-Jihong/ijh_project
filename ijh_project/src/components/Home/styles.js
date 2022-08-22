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
  background: linear-gradient(#a62349, #d07000, #c55300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-size: 90px;
  line-height: 100px;
  text-transform: uppercase;
  margin-top: 0px;
`;

export const Contents = styled.div`
  box-sizing: border-box;
  text-align: center;
`;

export const Contlist = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.div`
  flex: 0 0 32%;
  max-width: 32%;
  margin: 0px 10px 0px 10px;
  border: 2px outset #c6c9d8;
  border-radius: 10px;
  word-wrap: break-word;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Icon = styled.div`
  box-sizing: border-box;
`;

export const ListInfo = styled.div`
  > h4 {
    color: #fff;
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > p {
    padding-left: 20px;
    padding-right: 20px;
    color: #c6c9d8;
    opacity: 0.75;
  }
`;
