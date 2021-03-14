import React, { useState } from "react";
import styled from "styled-components/native";
import Button from "components/Button";
import TextInput from "components/TextInput";

import { LoginScreenNavigationProps } from "routes";

const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 10px;
`;

type Props = {
  navigation: LoginScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TextInput
        placeholder={"Usuário"}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder={"Senha"}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button text={"Login"} onPress={() => {}} />
      <Button
        text={"Criar Conta"}
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </Container>
  );
};
