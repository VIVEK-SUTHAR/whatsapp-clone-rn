import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  SingleChat: {
    chatName: string;
    avatar: string;
  };
  Profile: undefined;
  Settings: undefined;
  FullImage: {
    chatName: string;
    src: string;
  };
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type SingleChatProps = NativeStackScreenProps<
  RootStackParamList,
  "SingleChat"
>;
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type SettingsProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;
export type FullImageProps = NativeStackScreenProps<
  RootStackParamList,
  "FullImage"
>;

export type HomeTabBarParamList = {
  Communities: undefined;
  AllChats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type HomeTabScreenProps<Screen extends keyof HomeTabBarParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<HomeTabBarParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type CommunitiesProps = HomeTabScreenProps<"Communities">;
export type AllChatsProps = HomeTabScreenProps<"AllChats">;
export type StatusProps = HomeTabScreenProps<"Status">;
export type CallsProps = HomeTabScreenProps<"Calls">;
