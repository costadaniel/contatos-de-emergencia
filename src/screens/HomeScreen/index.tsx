import React, { useEffect } from "react";
import { Text } from "react-native";
import * as Contacts from "expo-contacts";
import styled from "styled-components/native";
import Button from "components/Button";
import BottomScreenButton from "components/BottomScreenButton";
import { useAuthProvider } from "contexts/AuthProvider";
import { HomeScreenNavigationProps } from "routes";

const HeaderButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

type Props = {
  navigation: HomeScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  const handleGoToContactsScreen = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") return;
    navigation.navigate("Settings");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtonContainer>
          <Button
            iconName="settings"
            bgColor="transparent"
            size={20}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
        </HeaderButtonContainer>
      ),
    });

    return () => updateAuthenticatedUser(null);
  }, []);

  return (
    <Container>
      <Text>Home screen</Text>
      <BottomScreenButton
        onPress={handleGoToContactsScreen}
        text="Adicionar Contatos"
      />
    </Container>
  );
};
