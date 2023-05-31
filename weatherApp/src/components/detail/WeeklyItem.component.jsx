import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { capitalise } from "../../utils/utils";
import moment from "moment";
import { IMAGES } from "../../constants";

const WeeklyItemComponent = ({ item }) => {

  const styles = StyleSheet.create({
    img: {
      width: 24,
      height: 24,
    },
  });
  return (
    <View className="px-4">
      <View className="flex flex-row gap-2 py-2">
        <Text className="text-slate-400 w-20">
          {moment(item.dt_txt).format("dddd").substring(0, 3)} {item.time}
        </Text>
        <Image source={IMAGES[item?.weatherIcon.toLowerCase()] || IMAGES.default} style={styles.img} />
        <Text className="text-slate-400 flex flex-1 justify-center">
          {capitalise(item.weather)}
        </Text>
        <Text className="text-slate-400 w-8 font-medium">
          {item.humidity}H{" "}
        </Text>
        <Text className="text-slate-400 w-12 font-light">{item.wind}km/h</Text>
      </View>
      <View className="py-px mb-2 bg-slate-300"></View>
    </View>
  );
};

export default WeeklyItemComponent;
