import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import * as Contacts from "expo-contacts";
import styled from "styled-components/native";
import BottomScreenButton from "components/BottomScreenButton";
import { ContactsScreenNavigationProps } from "routes";

const Container = styled.View`
  flex: 1;
`;

const ContactContainer = styled.View`
  background-color: white;
  padding: 10px;
  margin: 0px 10px 10px;
`;

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

export default ({ navigation }: Props) => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  const _renderContact = ({ item }: { item: Contacts.Contact }) => {
    console.log(item);
    return (
      <ContactContainer>
        <ContactName>{item.firstName}</ContactName>
        {item?.phoneNumbers && (
          <ContactNumber>{item?.phoneNumbers[0].number}</ContactNumber>
        )}
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

        setContacts(data);
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
