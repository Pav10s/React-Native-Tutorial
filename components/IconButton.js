import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Pressable, Text } from "react-native";

export default function IconButton({ icon, onPress, text }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={"#fff"} />
      <Text style={styles.iconText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#fff",
    marginTop: 10,
  },
});
