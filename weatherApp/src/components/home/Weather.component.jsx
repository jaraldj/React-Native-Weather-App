import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { IMAGES } from "../../constants";
import WeatherDetailsUtil from "../utils/WeatherDetails.util";
import moment from "moment";
import { capitalise } from "../../utils/utils";

const WeatherComponent = ({ temprature }) => {
  const styles = StyleSheet.create({
    img: {
      width: 150,
      height: 150,
    },
  });

  useEffect(() => {
    console.log(temprature);
  }, [temprature])
  

  return (
    <View>
      <View className="mb-2">
        <Text className="text-center text-slate-50 font-semibold text-lg">
          Today
        </Text>
        <Text className="text-center text-slate-400 text-sm">
          {moment().format("ddd, MMMM DD")}
        </Text>
      </View>
      <View className="bg-slate-900 m-8 rounded-xl p-4 border border-slate-800">
        <View className="flex items-center">
          <Image style={styles.img} source={IMAGES[temprature?.weatherIcon.toLowerCase()] || IMAGES.default} />
        </View>
        <View>
          <Text className="text-center text-slate-300 pb-2">
            {temprature ? capitalise(temprature.weather) : ""}
          </Text>
          <Text className="text-center text-slate-50 text-4xl font-semibold">
            {temprature ? temprature.temp : ""}°
          </Text>
          <Text className="text-center text-slate-300 py-1 text-xs">
            H:{temprature ? temprature.high : ""}°  L:{temprature ? temprature.low : ""}°
          </Text>
        </View>

        <WeatherDetailsUtil temprature={temprature} />
      </View>
    </View>
  );
};

export default WeatherComponent;
