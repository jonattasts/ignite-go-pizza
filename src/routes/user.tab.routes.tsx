import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import Orders from "@screens/Orders";

const { Navigator, Screen } = createBottomTabNavigator();

const UserTabRoutes = () => {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen name="home" component={Home}></Screen>
      <Screen name="orders" component={Orders}></Screen>
    </Navigator>
  );
};

export default UserTabRoutes;
