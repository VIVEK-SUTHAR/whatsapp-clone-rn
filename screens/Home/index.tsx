import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import type { HomeProps, HomeTabBarParamList } from "../../types/navigation";
import AllChats from "./AllChats";
import Calls from "./Calls";
import Communites from "./Communites";
import Status from "./Status";

const HomeTabBar = createMaterialTopTabNavigator<HomeTabBarParamList>();

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeTabBar.Navigator
      initialRouteName="AllChats"
      screenOptions={{
        tabBarActiveTintColor: Colors.PrimaryGreen,
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: Colors.PrimaryGreen,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "capitalize",
        },
      }}
    >
      <HomeTabBar.Screen
        name="Communities"
        component={Communites}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-people"
              color={focused ? Colors.PrimaryGreen : "gray"}
              size={24}
            />
          ),
          tabBarShowLabel: false,
          title: "",
        }}
      />
      <HomeTabBar.Screen
        name="AllChats"
        component={AllChats}
        options={{
          title: "Chats",
        }}
      />
      <HomeTabBar.Screen name="Status" component={Status} />
      <HomeTabBar.Screen name="Calls" component={Calls} />
    </HomeTabBar.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
