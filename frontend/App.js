

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RootNavigation from "./Navigations";

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
<NavigationContainer>
 <RootNavigation/>
</NavigationContainer>
  );
}

