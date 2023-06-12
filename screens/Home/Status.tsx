import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { StatusProps } from "../../types/navigation";
import { Colors } from "../../constants/colors";

const Status: React.FC<StatusProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBg,
  },
});
