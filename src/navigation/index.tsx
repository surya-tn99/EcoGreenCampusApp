import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import WalkthroughPage1 from '../screens/WalkthroughPage1';
import WalkthroughPage2 from '../screens/WalkthroughPage2';
import WalkthroughPage3 from '../screens/WalkthroughPage3';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ComplaintScreen from '../screens/ComplaintScreen';
import ComplaintConfirmationScreen from '../screens/ComplaintConfirmationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddActivityScreen from '../screens/AddActivityScreen';







type RootStackParamList = {
  Splash: undefined;
  WalkthroughPage1: undefined;
  WalkthroughPage2: undefined;
  WalkthroughPage3: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainApp: undefined;
  ComplaintScreen: undefined;
  ComplaintConfirmationScreen: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
  AddActivity: undefined;
};





type MainTabParamList = {
  Home: undefined;
  Activities: undefined;
  Leaderboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const TabIcon = ({ name, color, focused }: { name: string, color: string, focused: boolean }) => {
  const size = 24;
  const iconBaseStyle: any = { width: size, height: size, alignItems: 'center', justifyContent: 'center' };


  switch (name) {
    case 'Home':
      return (
        <View style={iconBaseStyle}>
          {/* Modern Industrial Home: Geometric Building Silhouette */}
          <View style={{ width: size * 0.4, height: size * 0.7, borderWidth: 2, borderColor: color, position: 'absolute', left: 2, bottom: 2, borderRadius: 1 }} />
          <View style={{ width: size * 0.35, height: size * 0.4, borderWidth: 2, borderColor: color, position: 'absolute', right: 2, bottom: 2, borderRadius: 1 }} />
          <View style={{ width: size * 0.6, height: 2, backgroundColor: color, position: 'absolute', top: 6, left: 4, transform: [{ rotate: '-30deg' }] }} />
        </View>
      );
    case 'Activities':
      return (
        <View style={iconBaseStyle}>
          <View style={{ width: size * 0.8, height: size * 0.8, borderTopLeftRadius: size * 0.8, borderBottomRightRadius: size * 0.8, borderWidth: 2, borderColor: color, backgroundColor: focused ? color + '20' : 'transparent' }} />
        </View>
      );
    case 'Leaderboard':
      return (
        <View style={iconBaseStyle}>
          {/* Modern Industrial Leaderboard: Structural Podium */}
          <View style={{ width: size * 0.25, height: size * 0.4, backgroundColor: color, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginRight: 2 }} />
          <View style={{ width: size * 0.25, height: size * 0.7, backgroundColor: color, borderTopRightRadius: 2, borderTopLeftRadius: 2 }} />
          <View style={{ width: size * 0.25, height: size * 0.3, backgroundColor: color, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginLeft: 2 }} />
          <View style={{ width: size * 0.9, height: 2, backgroundColor: color, position: 'absolute', bottom: 0 }} />
        </View>
      );

    default:
      return null;
  }
};

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, focused }) => <TabIcon name={route.name} color={color} focused={focused} />,
      tabBarActiveTintColor: '#2e7f32',
      tabBarInactiveTintColor: '#94a3b8',
      tabBarStyle: {
        height: 75,
        paddingBottom: 20,
        paddingTop: 8,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
      },

      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: 'bold',
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Activities" component={ActivitiesScreen} />
    <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f1f8e9' },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WalkthroughPage1" component={WalkthroughPage1} />
        <Stack.Screen name="WalkthroughPage2" component={WalkthroughPage2} />
        <Stack.Screen name="WalkthroughPage3" component={WalkthroughPage3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainApp" component={MainTabNavigator} />
        <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        <Stack.Screen name="ComplaintConfirmationScreen" component={ComplaintConfirmationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="AddActivity" component={AddActivityScreen} />
      </Stack.Navigator>




    </NavigationContainer>
  );
};

export default AppNavigator;
