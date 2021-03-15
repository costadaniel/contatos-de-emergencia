import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Button from "components/Button";
import { useAuth } from "contexts/AuthProvider";

export default () => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuth();

  useEffect(() => {
    return () => updateAuthenticatedUser(null);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
    </View>
  );
};
