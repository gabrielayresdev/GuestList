import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

const Input = ({ ...args }: TextInputProps) => {
  return <Container {...args}></Container>;
};

export default Input;
