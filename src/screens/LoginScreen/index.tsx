import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";

import { LoginScreenNavigationProps } from "routes";

type Props = {
  navigation: LoginScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login screen</Text>
      <Button
        text={"Criar Conta"}
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </View>
  );
};
