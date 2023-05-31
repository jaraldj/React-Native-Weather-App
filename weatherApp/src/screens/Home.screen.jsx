import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import AppBarComponent from "../components/home/AppBar.component";
import WeatherComponent from "../components/home/Weather.component";
import WeatherFlowComponent from "../components/home/WeatherFlow.component";
import { locationContext } from "../context/context";
import moment from "moment";
import { convertToCelsius } from "../utils/utils";

const HomeScreen = () => {
  const { location, temprature, setTemparature, setWeeklyTemp } =
    useContext(locationContext);

  useEffect(() => {
    if (location) {
      const fetchData = async () => {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=153b6bf563e953a02d953311e088c931`
        )
          .then((res) => res.json())
          .then((result) => {
            setTemparature({
              temp: Math.round(convertToCelsius(result.main.temp)),
              humidity: result.main.humidity,
              high: Math.round(convertToCelsius(result.main.temp_max)),
              low: Math.round(convertToCelsius(result.main.temp_min)),
              wind: Math.round(result.wind.speed),
              rain: result.rain && result.rain["1h"] ? result.rain["1h"] : 0,
              place: result.name,
              weather: result.weather[0].description,
              weatherIcon: result.weather[0].main,
            });
          });

        await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&cnt=7&appid=153b6bf563e953a02d953311e088c931`
        )
          .then((res) => res.json())
          .then((data) => {
            let weekly = [];
            if (data?.list) {
              data.list.forEach((item) => {
                const map = {
                  id: item.dt,
                  time: moment(item.dt_txt).format("HH:mm"),
                  temp: Math.round(convertToCelsius(item.main.temp)),
                  humidity: item.main.humidity,
                  high: Math.round(convertToCelsius(item.main.temp_max)),
                  low: Math.round(convertToCelsius(item.main.temp_min)),
                  wind: Math.round(item.wind.speed),
                  weather: item.weather[0].description,
                  dt_txt: item.dt_txt,
                  weatherIcon: item.weather[0].main,
                };
                weekly.push(map);
              });
            }
            setWeeklyTemp(weekly);
          });
      };
      fetchData();
    }
  }, [location]);

  return (
    <ScrollView className="flex flex-col h-screen bg-slate-950">
      <View>
        <AppBarComponent
          location={temprature ? temprature.place : "Loading..."}
        />
      </View>
      <View className="flex-1 pt-5">
        <WeatherComponent temprature={temprature} />
      </View>
      <View>
        <WeatherFlowComponent />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
