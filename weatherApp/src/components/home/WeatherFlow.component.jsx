import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { IMAGES, ROUTES } from "../../constants";
import { locationContext } from "../../context/context";

const WeatherFlowComponent = () => {
  const navigation = useNavigation();
  const { weeklyTemp } = useContext(locationContext);

  const styles = StyleSheet.create({
    img: {
      width: 24,
      height: 24,
    },
  });

  console.log(weeklyTemp);

  return (
    <View>
      <View className="mx-8">
        <View className="flex flex-row justify-between mb-2">
          <Text className="text-yellow-300">Today</Text>
          <Pressable
            className="flex flex-row items-center gap-x-1"
            onPress={() => navigation.navigate(ROUTES.DETAIL)}
          >
            <Text className="text-slate-400">More Details</Text>
            <Icon name="greater-than" size={18} color="gray" />
          </Pressable>
        </View>
        <View className="py-px mb-2 bg-slate-500"></View>
      </View>

      <View className="flex flex-row">
        <View className="flex flex-1 items-center px-2 mt-2">
          <Image source={IMAGES[weeklyTemp[0]?.weatherIcon.toLowerCase()] || IMAGES.default} style={styles.img} />
          <Text className="text-slate-400 my-1 text-sm">{weeklyTemp[0]?.temp}</Text>
          <Text className="text-slate-400 text-xs">{weeklyTemp[0]?.time}</Text>
        </View>
        <View className="flex flex-1 items-center px-2 mt-2">
          <Image source={IMAGES[weeklyTemp[1]?.weatherIcon.toLowerCase()] || IMAGES.default} style={styles.img} />
          <Text className="text-slate-400 my-1 text-sm">{weeklyTemp[1]?.temp}</Text>
          <Text className="text-slate-400 text-xs">{weeklyTemp[1]?.time}</Text>
        </View>
        <View className="flex flex-1 items-center px-2 mt-2">
          <Image source={IMAGES[weeklyTemp[2]?.weatherIcon.toLowerCase()] || IMAGES.default} style={styles.img} />
          <Text className="text-slate-400 my-1 text-sm">{weeklyTemp[2]?.temp}</Text>
          <Text className="text-slate-400 text-xs">{weeklyTemp[2]?.time}</Text>
        </View>
        <View className="flex flex-1 items-center px-2 mt-2">
          <Image source={IMAGES[weeklyTemp[3]?.weatherIcon.toLowerCase()] || IMAGES.default} style={styles.img} />
          <Text className="text-slate-400 my-1 text-sm">{weeklyTemp[3]?.temp}</Text>
          <Text className="text-slate-400 text-xs">{weeklyTemp[3]?.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherFlowComponent;
