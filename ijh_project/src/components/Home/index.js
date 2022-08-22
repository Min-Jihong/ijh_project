import React, { useEffect } from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Body,
  Contents,
  Contlist,
  Icon,
  List,
  ListInfo,
  Title,
} from "./styles";

const Home = () => {
  const data = [
    {
      header: "continuation",
      content:
        "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
      header: "Relationship",
      content:
        "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
    {
      header: "test",
      content:
        "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
    },
  ];

  return (
    <Body>
      <Title>
        Backend Engineer <br /> In-Jun , Hwang
      </Title>
      <Contents>
        <Contlist>
          {data.map((item, idx) => {
            return (
              <List key={idx}>
                <Icon>
                  {!idx && (
                    <DirectionsRunIcon
                      sx={{
                        color: "#616161",
                        fontSize: 100,
                        marginBottom: "34px",
                      }}
                    />
                  )}
                  {idx === 1 && (
                    <PersonAddIcon
                      sx={{
                        color: "#616161",
                        fontSize: 100,
                        marginBottom: "34px",
                      }}
                    />
                  )}
                  {idx === 2 && (
                    <PersonAddIcon
                      sx={{
                        color: "#616161",
                        fontSize: 100,
                        marginBottom: "34px",
                      }}
                    />
                  )}
                </Icon>
                <ListInfo>
                  <h4>{item.header}</h4>
                  <p>{item.content}</p>
                </ListInfo>
              </List>
            );
          })}
        </Contlist>
      </Contents>
    </Body>
  );
};

export default Home;
