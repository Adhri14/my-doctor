import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BottomNavigator } from "../components";
import {
    Chatting,
    ChooseDoctor,
    Doctor,
    DoctorProfile,
    GetStarted,
    Home,
    Hospitals,
    Login,
    Messages,
    Register,
    SignIn,
    SignUp,
    SplashScreen,
    UpdateProfile,
    UploadPhoto,
    UserProfile,
} from "../pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Doctor" component={Doctor} />
            <Tab.Screen name="Message" component={Messages} />
            <Tab.Screen name="Hospital" component={Hospitals} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChooseDoctor"
                component={ChooseDoctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Doctor"
                component={Doctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DoctorProfile"
                component={DoctorProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UpdateProfile"
                component={UpdateProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;
