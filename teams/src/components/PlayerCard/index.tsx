import React from "react";
import { Container, Icon, Name } from "./styles";
import ButtonIcon from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: VoidFunction;
};

const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
};

export default PlayerCard;
