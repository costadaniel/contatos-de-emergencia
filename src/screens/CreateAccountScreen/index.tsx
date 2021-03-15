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

  const handleCreateAccount = async () => {
    try {
      const accounts = await AsyncStorage.getItem(
        "@contatos_de_emergencia/users"
      );
      if (accounts !== null) {
        const users = JSON.parse(accounts);
        const isUserExist = users.some((obj: any) => obj.username === username);

        if (!isUserExist) {
          const newUsers = [
            ...users,
            {
              username,
              password,
              contacts: [],
            },
          ];
          await AsyncStorage.setItem(
            "@contatos_de_emergencia/users",
            JSON.stringify(newUsers)
          );
          navigation.navigate("Login");
        }
      } else {
        await AsyncStorage.setItem(
          "@contatos_de_emergencia/users",
          JSON.stringify([{ username, password, contacts: [] }])
        );
        navigation.navigate("Login");
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
