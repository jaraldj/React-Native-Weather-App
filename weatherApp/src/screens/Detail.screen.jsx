import { View } from "react-native";
import DetailAppBarComponent from "../components/detail/DetailAppBar.component";
import DetailWeatherComponent from "../components/detail/DetailWeather.component";
import DetailWeatherWeekComponent from "../components/detail/DetailWeatherWeek.component";

const DetailScreen = () => {

  return (
    <View className="bg-slate-950 min-h-screen">
      <DetailAppBarComponent />
      <DetailWeatherComponent />
      <DetailWeatherWeekComponent />
    </View>
  );
};
export default DetailScreen;
