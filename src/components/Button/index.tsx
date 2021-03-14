import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type StyledTypes = {
  bgColor?: string;
  color?: string;
  textSize?: number;
};

const ButtonContainer = styled.TouchableOpacity<StyledTypes>`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0px 0px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.bgColor ? props.color : "black")};
`;

const ButtonText = styled.Text<StyledTypes>`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.textSize ? props.textSize : 16)}px;
`;

type Props = {
  iconName?: any;
  text?: string;
  color?: string;
  bgColor?: string;
  size?: number;
  onPress: () => void;
};

const Button = ({ iconName, size, text, color, bgColor, onPress }: Props) => {
  return (
    <ButtonContainer bgColor={bgColor} onPress={onPress}>
      {iconName && <Feather name={iconName} size={size} color={color} />}
      {text && (
        <ButtonText color={color} textSize={size}>
          {text}
        </ButtonText>
      )}
    </ButtonContainer>
  );
};

export default Button;
