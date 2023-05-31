import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigators/Home.navigation";
import { SafeAreaView, NativeModules } from "react-native";
import LocationProvider from "./src/context/context";

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <NavigationContainer>
        <LocationProvider>
          <HomeNavigation />
        </LocationProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
