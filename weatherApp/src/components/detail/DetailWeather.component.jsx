import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../constants";
import WeatherDetailsUtil from "../utils/WeatherDetails.util";
import { locationContext } from "../../context/context";
import { capitalise } from "../../utils/utils";

const DetailWeatherComponent = () => {
  const { temprature } = useContext(locationContext);

  const styles = StyleSheet.create({
    img: {
      width: 100,
      height: 100,
    },
  });

  return (
    <View className="bg-slate-900 m-8 rounded-xl p-4 border border-slate-800">
      <View className="flex flex-row">
        <View>
          <Image source={IMAGES[temprature.weatherIcon.toLowerCase()]} style={styles.img} />
        </View>
        <View className="flex-1 justify-center">
          <Text className="text-center text-slate-50 text-lg">
            Today
          </Text>
          <View className="flex flex-row justify-center my-1 py-2">
            <Text className="text-slate-50 text-3xl font-semibold">{temprature.high}°</Text>
            <Text className="text-slate-300 text-xl flex self-end">/{temprature.low}°</Text>
          </View>

          <Text className="text-slate-300 text-center text-xs">{capitalise(temprature.weather)}</Text>
        </View>
      </View>
      <View className="mt-8">
        <WeatherDetailsUtil temprature={temprature} />
      </View>
    </View>
  );
};

export default DetailWeatherComponent;
