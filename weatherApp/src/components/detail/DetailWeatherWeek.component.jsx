import React, { useContext, useState } from "react";

import { WEEKLYREPORT } from "../../data";
import WeeklyItemComponent from "./WeeklyItem.component";

import { FlatList, View } from "react-native";
import { locationContext } from "../../context/context";

const DetailWeatherWeekComponent = () => {
  const {weeklyTemp} = useContext(locationContext)

  return (
    <View>
      {weeklyTemp && (
        <FlatList
          data={weeklyTemp}
          renderItem={({ item }) => <WeeklyItemComponent item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default DetailWeatherWeekComponent;
