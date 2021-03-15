import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <Container>
      <Text>Settings screen</Text>
    </Container>
  );
};
