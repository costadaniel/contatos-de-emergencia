import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthProvider } from "contexts/AuthProvider";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const SettingsText = styled.Text``;

const Switch = styled.Switch``;

export default () => {
  const [stayLogged, setStayLogged] = useState(true);
  const { authenticatedUser } = useAuthProvider();

  const toggleSwitch = async () => {
    try {
      const data = await AsyncStorage.getItem("@contatos_de_emergencia/logged");
      const loggedAccount = data ? JSON.parse(data) : null;

      if (loggedAccount !== null) {
        await AsyncStorage.setItem(
          "@contatos_de_emergencia/logged",
          JSON.stringify(null)
        );
        setStayLogged(false);
      } else {
        await AsyncStorage.setItem(
          "@contatos_de_emergencia/logged",
          JSON.stringify(authenticatedUser)
        );
        setStayLogged(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(
          "@contatos_de_emergencia/logged"
        );
        const loggedAccount = data ? JSON.parse(data) : null;

        console.log(loggedAccount);

        if (loggedAccount !== null) return;
        setStayLogged(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <SettingsText>Permanecer Logado</SettingsText>
      <Switch onValueChange={toggleSwitch} value={stayLogged} />
    </Container>
  );
};
