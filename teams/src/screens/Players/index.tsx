import { Alert, FlatList, TextInput } from "react-native";
import React from "react";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import Filter from "@components/Filter";
import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import PlayerCard from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import Input from "@components/Input";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
};
export function Players() {
  const [playerName, setPlayerName] = React.useState("");
  const [team, setTeam] = React.useState("Time A");
  const [players, setPlayers] = React.useState<PlayerStorageDTO[]>([]);

  const InputRef = React.useRef<TextInput>(null);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleAddPlayers() {
    if (playerName.trim().length === 0) return;

    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      await fetchPlayersbyTeam();
      setPlayerName("");
      InputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        Alert.alert("Nova pessoa", "Não foi possível adicionar o jogador");
      }
    }
  }
  async function fetchPlayersbyTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
    }
  }
  async function handlePlayersRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersbyTeam();
    } catch (error) {
      throw error;
    }
  }
  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover grupo", "Não foi possível remover o grupo");
      console.log(error);
    }
  }
  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => groupRemove() },
    ]);
  }

  React.useEffect(() => {
    fetchPlayersbyTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          inputRef={InputRef}
          onSubmitEditing={handleAddPlayers}
          returnKeyLabel="done"
        />
        <ButtonIcon icon="add" onPress={() => handleAddPlayers()} />
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
          showsHorizontalScrollIndicator={false}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayersRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  );
}
