import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import WalkthroughPage1 from '../screens/WalkthroughPage1';
import WalkthroughPage2 from '../screens/WalkthroughPage2';
import WalkthroughPage3 from '../screens/WalkthroughPage3';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';


type RootStackParamList = {
  Splash: undefined;
  WalkthroughPage1: undefined;
  WalkthroughPage2: undefined;
  WalkthroughPage3: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainApp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainApp = () => <HomeScreen />;


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#4CAF50' },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WalkthroughPage1" component={WalkthroughPage1} />
        <Stack.Screen name="WalkthroughPage2" component={WalkthroughPage2} />
        <Stack.Screen name="WalkthroughPage3" component={WalkthroughPage3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
