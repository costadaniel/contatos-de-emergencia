import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import styled from "styled-components/native";

import { LoginScreenNavigationProps } from "routes";

const CreateAccountButton = styled(Button)`
  background-color: red;
`;

type Props = {
  navigation: LoginScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Text>Login screen</Text>
      <Button text={"Login"} onPress={() => {}} />
      <CreateAccountButton
        text={"Criar Conta"}
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </View>
  );
};
