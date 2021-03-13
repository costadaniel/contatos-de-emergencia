import React, { useState } from "react";
import { View, Text, Button } from "react-native";

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
        onPress={() => navigation.navigate("CreateAccount")}
        title="Create Account"
      />
    </View>
  );
};
