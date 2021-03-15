import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type StyledTypes = {
  bgColor?: string;
  color?: string;
};

const ButtonContainer = styled.TouchableOpacity<StyledTypes>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.padding}px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "black")};
`;

const ButtonText = styled.Text<StyledTypes>`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 20px;
`;

type Props = {
  iconName?: any;
  text?: string;
  color?: string;
  bgColor?: string;
  onPress: () => void;
};

const BottomScreenButton = ({
  iconName,
  text,
  color,
  bgColor,
  onPress,
}: Props) => {
  return (
    <ButtonContainer bgColor={bgColor} onPress={onPress}>
      {iconName && <Feather name={iconName} size={20} color={color} />}
      {text && <ButtonText color={color}>{text}</ButtonText>}
    </ButtonContainer>
  );
};

export default BottomScreenButton;
