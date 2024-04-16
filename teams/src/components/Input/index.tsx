import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

const Input = ({ ...args }: TextInputProps) => {
  const { COLORS } = useTheme();

  return (
    <Container placeholderTextColor={COLORS.GRAY_300} {...args}></Container>
  );
};

export default Input;
