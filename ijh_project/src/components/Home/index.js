import React from "react";
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
  return (
    <Body>
      <Title>
        Backend Engineer <br /> In-Jun , Hwang
      </Title>
      <Contents>
        <Contlist>
          <List>
            <Icon>
              <DirectionsRunIcon
                sx={{ color: "#ac0404", fontSize: 100, marginBottom: "34px" }}
              />
            </Icon>
            <ListInfo>
              <h4>continuation</h4>
              <p>
                테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
              </p>
            </ListInfo>
          </List>
          <List>
            <Icon>
              <PersonAddIcon
                sx={{ color: "#ac0404", fontSize: 100, marginBottom: "34px" }}
              />
            </Icon>
            <ListInfo>
              <h4>Relationship</h4>
              <p>
                테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
              </p>
            </ListInfo>
          </List>
          <List>
            <Icon>
              <DirectionsRunIcon
                sx={{ color: "#ac0404", fontSize: 100, marginBottom: "34px" }}
              />
            </Icon>
            <ListInfo>
              <h4>test</h4>
              <p>
                테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
              </p>
            </ListInfo>
          </List>
        </Contlist>
      </Contents>
    </Body>
  );
};

export default Home;
