import React from "react";
import { Container, Text } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard/indext";
import { ListEmpty } from "@components/ListEmpty";
import Button from "@components/Button";

const Groups = () => {
  const [groups, setGroups] = React.useState<string[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : null}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal criar sua primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
};

export default Groups;
