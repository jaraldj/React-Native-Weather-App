import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ROUTES } from "../../constants";

const DetailAppBarComponent = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row py-2">
      <Pressable
        className="p-2 ml-4 bg-slate-800 rounded-full border border-slate-700"
        onPress={() => navigation.goBack()}
      >
        <Icon name="skip-back" size={20} color="#fff" />
      </Pressable>
      <View className="flex flex-1 flex-row gap-x-1 items-center justify-center mr-16">
        <Icon name="calendar" size={20} color="#fff" />
        <Text className="text-slate-50">More Detail</Text>
      </View>
    </View>
  );
};

export default DetailAppBarComponent;
