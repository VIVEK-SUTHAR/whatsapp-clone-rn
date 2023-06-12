import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./navigation";
import "expo-dev-client";
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="inverted" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
