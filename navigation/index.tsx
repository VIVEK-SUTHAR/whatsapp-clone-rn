import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import FullImage from "../screens/FullImage";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import SingleChat from "../screens/SingleChat";
import type { RootStackParamList } from "../types/navigation";

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

const RootTheme: Theme = {
  dark: true,
  colors: {
    background: "black",
    border: "transparent",
    card: Colors.HeaderBg,
    notification: "gray",
    primary: "white",
    text: "white",
  },
};

const RootNavigation = () => {
  return (
    <NavigationContainer theme={RootTheme}>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: "WhatsApp",
            headerTintColor: "gray",
            headerShadowVisible: false,
            headerRight: () => <HeaderRight />,
          }}
        />
        <StackNavigator.Screen name="Profile" component={Profile} />
        <StackNavigator.Screen name="Settings" component={Settings} />
        <StackNavigator.Screen name="SingleChat" component={SingleChat} />
        <StackNavigator.Screen
          name="FullImage"
          component={FullImage}
          options={{
            headerShown: false,
            presentation: "transparentModal",
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const HeaderRight = () => {
  return (
    <View style={styles.headerRightContainer}>
      <Feather name="camera" color={"gray"} size={24} />
      <Ionicons name="search-sharp" color={"gray"} size={24} />
      <MaterialIcons name="more-vert" color={"gray"} size={24} />
    </View>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    columnGap: 24,
  },
});
