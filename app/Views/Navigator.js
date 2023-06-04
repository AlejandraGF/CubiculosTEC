import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login/LoginScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator initialRouteName="Login">
           <HomeStackNavigator.Screen
                name = "Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}
export default function ScreenNavigator(){
    return (
        <NavigationContainer>
           <MyStack/>     
        </NavigationContainer>
    )
}