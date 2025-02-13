import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginpage from '../Screens/Login_page';
import RegisterStep1 from '../Screens/Register_page1';
import RegisterStep2 from '../Screens/Register_page2';
import LoadingScreen1 from '../Screens/LoadingScreen1';
import LoadingScreen2 from '../Screens/LoadingScreen2';
import HomePage from '../Screens/Home_page';
import ForgotPassword from '../Screens/forget_page';
import ResetPassword from '../Screens/ResetPassword';
import AddshopPage from '../Screens/AddShopPage';
import NotificationsPage from '../Screens/NotificationsPage';
import AddShopPage from '../Screens/AddShopPage';
import ShopDetailsPage from '../Screens/ShopDetailsPage';
import ClientsPage from '../Screens/ClientsPage';





const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoadingScreen1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoadingScreen1" component={LoadingScreen1} />
      <Stack.Screen name="LoadingScreen2" component={LoadingScreen2} />
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
      <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AddShopPage" component={AddShopPage} />
      <Stack.Screen name="NotificationsPage" component={NotificationsPage} />
      <Stack.Screen name="ShopDetailsPage" component={ShopDetailsPage} />
      <Stack.Screen name="ClientsPage" component={ClientsPage} />


    </Stack.Navigator>
  );
};

export default AppNavigator;