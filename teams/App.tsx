import Groups from "@screens/Groups";
import { StyleSheet, Text, View } from "react-native";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
