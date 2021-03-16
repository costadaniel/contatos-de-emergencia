import React, { useEffect } from "react";
import { FlatList } from "react-native";
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
`;

const ContactContainer = styled.TouchableOpacity`
  background-color: white;
  padding: 10px;
  margin: 0px 10px 10px;
  border-radius: 5px;
`;

const ContactName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ContactNumber = styled.Text`
  color: gray;
  font-size: 14px;
`;

type ItemProps = {
  item: {
    id: string;
    name: string;
    phone: string;
  };
};

type Props = {
  navigation: HomeScreenNavigationProps;
};

export default ({ navigation }: Props) => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  const handleGoToContactsScreen = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") return;
    navigation.navigate("Contacts");
  };

  const _renderContact = ({ item }: ItemProps) => {
    return (
      <ContactContainer>
        <ContactName>{item.name}</ContactName>
        <ContactNumber>{item.phone}</ContactNumber>
      </ContactContainer>
    );
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
      <FlatList
        data={authenticatedUser.contacts}
        renderItem={_renderContact}
        keyExtractor={(item) => item.id}
      />
      <BottomScreenButton
        onPress={handleGoToContactsScreen}
        text="Adicionar Contatos"
      />
    </Container>
  );
};
