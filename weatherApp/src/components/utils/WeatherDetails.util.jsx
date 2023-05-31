import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const WeatherDetailsUtil = ({temprature}) => {
  return (
    <View className="flex flex-row justify-between items-center px-4 py-4">
      <View className="flex items-center">
        <Icon name="wind" size={24} color="#fff" />
        <Text className="text-slate-50 text-xs">{temprature ? temprature.wind : ""} km/h</Text>
        <Text className="text-slate-400 text-xs font-light">Wind</Text>
      </View>
      <View className="flex items-center">
        <Icon name="cloud" size={24} color="#fff" />
        <Text className="text-slate-50 text-xs">{temprature ? temprature.rain : ""} mm</Text>
        <Text className="text-slate-400 text-xs font-light">Rain</Text>
      </View>
      <View className="flex items-center">
        <Icon name="droplet" size={24} color="#fff" />
        <Text className="text-slate-50 text-xs">{temprature ? temprature.humidity : ""} %</Text>
        <Text className="text-slate-400 text-xs font-light">Humidity</Text>
      </View>
    </View>
  );
};

export default WeatherDetailsUtil;
