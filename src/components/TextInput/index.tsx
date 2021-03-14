import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const InputContainer = styled.View`
  flex-direction: row;
  margin: 0px 0px 10px;
  border-radius: 5px;
  border-width: 2px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Input = styled.TextInput`
  width: 80%;
  font-size: 16px;
  padding: 5px;
  margin-right: auto;
`;

const ClearButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

type Props = {
  iconName?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: any;
  clearButton?: boolean;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: any) => void;
};

const TextInput = ({
  iconName,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  clearButton,
}: Props) => {
  const handleClearValue = () => {
    onChangeText("");
  };

  return (
    <InputContainer>
      {iconName && (
        <IconContainer>
          <Feather name={iconName} size={20} color="black" />
        </IconContainer>
      )}
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType ? keyboardType : "default"}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
      {clearButton && value?.length > 0 && (
        <ClearButtonContainer onPress={() => handleClearValue()}>
          <Feather name="x-circle" size={20} color="black" />
        </ClearButtonContainer>
      )}
    </InputContainer>
  );
};

export default TextInput;
