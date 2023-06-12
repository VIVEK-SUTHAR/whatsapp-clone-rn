import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { SingleChatProps } from "../types/navigation";
import { useFocusEffect } from "@react-navigation/native";
import { Colors } from "../constants/colors";

const SingleChat: React.FC<SingleChatProps> = ({ navigation, route }) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        title: route.params.chatName,
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text>SingleChat</Text>
    </View>
  );
};

export default SingleChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBg,
  },
});
