import { createContext, useState } from "react";

export const locationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [temprature, setTemparature] = useState(null);
  const [weeklyTemp, setWeeklyTemp] = useState([])

  return (
    <locationContext.Provider value={{location, setLocation, temprature, setTemparature, weeklyTemp, setWeeklyTemp}}>
      {children}
    </locationContext.Provider>
  );
};

export default LocationProvider;
