import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import Button from "components/Button";
import TextInput from "components/TextInput";

import { CreateAccountScreenNavigationProps } from "routes";

const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 10px;
`;

type Props = {
  navigation: CreateAccountScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    navigation.navigate("Login");
  };

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
      <TextInput
        placeholder={"Confirmar senha"}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button text={"Criar Conta"} onPress={() => handleCreateAccount()} />
    </Container>
  );
};
