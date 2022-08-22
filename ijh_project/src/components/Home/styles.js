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
`;

export const Contents = styled.div`
  box-sizing: border-box;
`;

export const Contlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const List = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

export const Icon = styled.div`
  box-sizing: border-box;
`;

export const ListInfo = styled.div`
  > h4 {
    color: #fff;
  }
  > p {
    color: #c6c9d8;
  }
`;
