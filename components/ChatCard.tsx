import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./common/Avatar";

type ChatCardProps = {
  src: string;
  chatName: string;
  lastMessage: string;
};

const ChatCard: React.FC<ChatCardProps> = ({ src, chatName, lastMessage }) => {
  const navigation = useNavigation();

  const openFullImage = () => {
    navigation.navigate("FullImage", {
      src: src,
      chatName: chatName,
    });
  };

  const goToSingleChat = () => {
    navigation.navigate("SingleChat", {
      avatar: src ?? "",
      chatName: chatName,
    });
  };

  return (
    <TouchableOpacity style={styles.chatCardContainer} onPress={goToSingleChat}>
      <TouchableOpacity style={styles.avatarContainer} onPress={openFullImage}>
        <Avatar src={src ? src : ""} height={52} width={52} />
      </TouchableOpacity>
      <View style={styles.chatDetailsContainer}>
        <Text style={styles.chatHeading}>{chatName}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  chatCardContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  avatarContainer: {
    flex: 0.25,
  },
  chatDetailsContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  chatHeading: {
    color: "#ece5dd",
    fontSize: 18,
    fontWeight: "500",
  },
  lastMessage: {
    color: "gray",
    fontSize: 14,
    fontWeight: "400",
  },
});
