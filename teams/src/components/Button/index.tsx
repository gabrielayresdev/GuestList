import React from "react";
import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

const Button = ({ title, type = "PRIMARY", ...args }: Props) => {
  return (
    <Container type={type} {...args}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
