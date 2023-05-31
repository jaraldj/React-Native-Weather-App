import React from "react";
import Icon from "react-native-vector-icons/Octicons";
import { StyleSheet, Text, View } from "react-native";

const AppBarComponent = ({location}) => {
  const styles = StyleSheet.create({
    iconPad: {
      backgroundColor: "yellow",
    },
  });

  return (
    <View className="flex flex-row justify-between items-center py-2 px-1">
      <View className="rounded-full bg-slate-900 p-2 border border-slate-800">
        <Icon name="apps" size={20} color="#fff" />
      </View>
      <View className="flex flex-row items-center">
        <Icon name="location" size={20} color="#fff" />
        <Text className="text-center text-slate-50 text-lg ml-1">{location}</Text>
      </View>
      <View className="flex flex-row py-1 px-2 gap-x-1 items-center rounded-full border border-slate-800 bg-slate-900">
        <Icon name="sun" size={20} color="gray" />
        <View className="bg-yellow-400 rounded-full px-2 py-1">
          <Icon name="moon" size={20} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default AppBarComponent;
