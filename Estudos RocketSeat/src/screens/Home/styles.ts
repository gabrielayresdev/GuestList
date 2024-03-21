import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    color: "#FCFDFE",
    fontWeight: "700",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    color: "#FDFCFE",
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#1F1E25",
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    color: "#FCFDFE",
    fontSize: 14,
    textAlign: "center",
    marginTop: 48,
  },
});
