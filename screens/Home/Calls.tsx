import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CallsProps } from "../../types/navigation";
import { Colors } from "../../constants/colors";

const Calls: React.FC<CallsProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBg,
  },
});
