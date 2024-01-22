import { PaperProvider } from "react-native-paper";
import Login from "./screens/Login";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <Login/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
