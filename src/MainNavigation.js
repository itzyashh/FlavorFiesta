import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "./screens/Home/Home";
import Settings from "./screens/Settings/Settings";
import Favourite from "./screens/Favourite/Favourite";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
       name="Home" component={Home} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
       name="Favorite" component={Favourite} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
       name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}


const MainNavigation = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default MainNavigation