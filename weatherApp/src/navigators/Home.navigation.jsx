import React, { useContext, useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home.screen";
import DetailScreen from "../screens/Detail.screen";
import { ROUTES } from "../constants";

import * as Location from "expo-location";
import { locationContext } from "../context/context";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const {setLocation} = useContext(locationContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
