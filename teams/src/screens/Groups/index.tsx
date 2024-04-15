import React from "react";
import { Container, Text } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard/indext";

const Groups = () => {
  const [groups, setGroups] = React.useState<string[]>(["Depois da 00"]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
};

export default Groups;
