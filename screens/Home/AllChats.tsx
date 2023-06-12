import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import ChatCard from "../../components/ChatCard";
import { Colors } from "../../constants/colors";
import type { AllChatsProps } from "../../types/navigation";

export type ChatData = {
  name: string;
  lastMessage: string;
  src?: string;
};

const data: ChatData[] = [
  {
    name: "testdm 2",
    lastMessage: "hey we are doing it",
  },
  {
    name: "test dm3",
    lastMessage:
      "app crashing due to memory heap overflow,fix it in first prority",
  },
  {
    name: "RN Devs",
    lastMessage: "yoga",
  },
  {
    name: "Flutter Devs",
    lastMessage: "skia",
  },
];

const CARD_HEIGHT = 64;

const getItemLayout = (_: any, index: number) => {
  return {
    index: index,
    length: CARD_HEIGHT,
    offset: index * CARD_HEIGHT,
  };
};

const AllChats: React.FC<AllChatsProps> = ({ navigation }) => {
  const renderItem = React.useCallback(({ item }: { item: ChatData }) => {
    return (
      <ChatCard src={""} chatName={item.name} lastMessage={item.lastMessage} />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        windowSize={10}
      />
    </View>
  );
};

export default AllChats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBg,
  },
});
