import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { CommunitiesProps } from "../../types/navigation";
import { Colors } from "../../constants/colors";

const Communites: React.FC<CommunitiesProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Communites</Text>
    </View>
  );
};

export default Communites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBg,
  },
});
