import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import type { FullImageProps } from "../types/navigation";
import { FALLBACK_IMAGE } from "../components/common/Avatar";

const FullImage: React.FC<FullImageProps> = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <View style={styles.imageTitleBox}>
          <Text style={styles.imageTitle}>{route.params.chatName}</Text>
        </View>
        <Image
          source={{
            uri: FALLBACK_IMAGE,
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default FullImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  imageBox: {
    height: 250,
    width: 250,
  },
  imageTitleBox: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    height: 30,
    width: "100%",
    zIndex: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  imageTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
