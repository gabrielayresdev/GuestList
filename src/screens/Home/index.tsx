import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import React from "react";

export default function Home() {
  /* const participants = [
    "Gabriel Ayres",
    "João Felipe",
    "Lucan Coutinho",
    "Alexandre Villa",
    "Guilherme Gaudêncio",
    "Fabrício",
    "Arthur Rodrigues",
    "Miguel Rogério",
    "Luiz Felipe",
  ]; */
  const [participants, setParticipants] = React.useState<string[]>([]);
  const [participantName, setParticipantName] = React.useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName))
      return Alert.alert(
        "Participants already exists",
        "Participante já cadastrado!"
      );

    setParticipants((prevValue) => [...prevValue, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido", "Removido"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantRemove} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />

      {/* OR */}

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}

      {/* 
      
        ScrollView renders all components even though they are not visible
        FlatList renders only the components that are visible
      */}
    </View>
  );
}
