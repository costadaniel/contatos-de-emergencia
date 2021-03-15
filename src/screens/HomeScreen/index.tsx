import React, { useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Button from "components/Button";
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
    </Container>
  );
};
