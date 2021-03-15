import React, { useState } from "react";
import styled from "styled-components/native";
import Button from "components/Button";
import TextInput from "components/TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "contexts/AuthProvider";

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
  const { updateAuthenticatedUser } = useAuth();

  const handleLogin = async () => {
    try {
      const accounts = await AsyncStorage.getItem(
        "@contatos_de_emergencia/users"
      );
      if (accounts === null) return;

      const users = JSON.parse(accounts);
      const user = users.find(
        (obj: any) => obj.username === username && obj.password === password
      );

      if (user) {
        updateAuthenticatedUser(user);
      }
    } catch (error) {
      console.log(error);
    }
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
      <Button text={"Login"} onPress={handleLogin} />
      <Button
        text={"Criar Conta"}
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </Container>
  );
};
