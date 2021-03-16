import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import * as Contacts from "expo-contacts";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import BottomScreenButton from "components/BottomScreenButton";
import { ContactsScreenNavigationProps } from "routes";
import { useAuthProvider } from "contexts/AuthProvider";

const Container = styled.View`
  flex: 1;
`;

const ContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 0px 10px 10px;
  border-radius: 5px;
`;

const CheckedContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 30px;
  border-width: 2px;
  background-color: white;
  height: 30px;
  width: 30px;
`;

const ContactInfoContainer = styled.View``;

const ContactName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ContactNumber = styled.Text`
  color: gray;
  font-size: 14px;
`;

type Props = {
  navigation: ContactsScreenNavigationProps;
};

type ItemProps = {
  item: {
    id: string;
    name: string;
    phone: string;
  };
};

export default ({ navigation }: Props) => {
  const [contacts, setContacts] = useState<any>([]);
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  const _renderContact = ({ item }: ItemProps) => {
    return (
      <ContactContainer>
        <CheckedContainer>
          {<Feather name="check" color="black" size={20} />}
        </CheckedContainer>
        <ContactInfoContainer>
          <ContactName>{item.name}</ContactName>
          <ContactNumber>{item.phone}</ContactNumber>
        </ContactInfoContainer>
      </ContactContainer>
    );
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        const accounts = data
          .map((item) =>
            item.phoneNumbers
              ? {
                  id: item.id,
                  name: item.firstName,
                  phone: item?.phoneNumbers[0].number,
                }
              : null
          )
          .filter((item) => item !== null);

        setContacts(accounts);
      }
    })();
  }, []);

  return (
    <Container>
      <FlatList
        data={contacts}
        renderItem={_renderContact}
        keyExtractor={(item) => item.id}
      />
      <BottomScreenButton
        onPress={() => {
          console.log(contacts[0]);
        }}
        text="Salvar Contatos"
      />
    </Container>
  );
};
