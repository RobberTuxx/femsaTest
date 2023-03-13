import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../components/pages/home";
import Details from "../components/pages/details";

const Root = createNativeStackNavigator()

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen name={'Home'} component={Home}/>
                <Root.Screen name={'Details'} component={Details}/>
            </Root.Navigator>
        </NavigationContainer>
    )
}
