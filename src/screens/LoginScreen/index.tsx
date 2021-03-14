import React, { useState } from "react";
import { View } from "react-native";
import Button from "components/Button";
import TextInput from "components/TextInput";

import { LoginScreenRouteProps, LoginScreenNavigationProps } from "routes";

type Props = {
  routes: LoginScreenRouteProps;
  navigation: LoginScreenNavigationProps;
};

export default ({ navigation, routes }: Props) => {
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
    </View>
  );
};
