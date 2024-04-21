import Header from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import Highlight from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import Input from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import React from "react";

export function Players() {
  const [team, setTeam] = React.useState("Time A");
  const [players, setPlayers] = React.useState([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <Filter title="Time A" isActive />
    </Container>
  );
}