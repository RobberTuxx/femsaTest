import {useFonts} from "expo-font";
import MainNavigator from "./src/navigators/main";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Avenir': require('./assets/fonts/Avenir.otf'),
  });

  if (!fontsLoaded){
    return null
  }

  return (
    <MainNavigator/>
  );
}

