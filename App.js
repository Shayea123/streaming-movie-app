import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

//Screens

import Home from "./screens/Home";
import List from "./screens/List";
import Theatre from "./screens/Theatre";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          swipeEnabled
          initialRoute="Home"
          activeColor="#FBA400"
          inactiveColor="#fff"
          style={{ backgroundColor: "#FBA400" }}
          barStyle={{
            backgroundColor: "#021f3d",
            padding: 0,
            borderTopWidth: 2,
            borderTopColor: "#FBA400",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "الرئيسية",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={28} />
              ),
            }}
          />
          <Tab.Screen
            name="Theatre"
            component={Theatre}
            options={{
              tabBarLabel: "المسرح",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="play-circle"
                  color={color}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="List"
            component={List}
            options={{
              tabBarLabel: "قائمة الأفلام",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="playlist-play"
                  color={color}
                  size={28}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
