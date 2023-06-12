import React from "react";
import { Image } from "react-native";
import { Colors } from "../../constants/colors";
type AvatarProps = {
  src: string;
  height: number | string;
  width: number | string;
};

export const FALLBACK_IMAGE = "https://i.pravatar.cc/150?img=47";
const Avatar: React.FC<AvatarProps> = ({ src, height, width }) => {
  return (
    <Image
      source={{
        uri: src
          ? src
          : "https://i.pinimg.com/600x315/66/b8/58/66b858099df3127e83cb1f1168f7a2c6.jpg",
      }}
      style={{
        height: height ? height : 24,
        width: width ? width : 24,
        backgroundColor: Colors.HeaderBg,
        borderRadius: 100,
        padding: 16,
      }}
    />
  );
};
export default Avatar;
