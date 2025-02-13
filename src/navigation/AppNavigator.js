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
import AddShopPage from '../Screens/AddShopPage';
import ShopDetailsPage from '../Screens/ShopDetailsPage';
import Client_Page from '../Screens/ClientsPage';
import Notification_Page from '../Screens/NotificationsPage';
import FournisseursPage from '../Screens/FournisseursPage';
import AddFournisseurPage from '../Screens/AddFournisseurPage';
import AddClientPage from '../Screens/AddClientPage';
import AddProductPage from '../Screens/AddProductPage';
import AddReapproPage from '../Screens/AddReapproPage';
import FacturesPage from '../Screens/FacturesPage';
import ReapproPage from '../Screens/ReapproPage';
import StockPage from '../Screens/StockPage';






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
      <Stack.Screen name="NotificationsPage" component={Notification_Page} />
      <Stack.Screen name="ShopDetailsPage" component={ShopDetailsPage} />
      <Stack.Screen name="ClientsPage" component={Client_Page} />
      <Stack.Screen name="FournisseursPage" component={FournisseursPage} />
      <Stack.Screen name="AddClientPage" component={AddClientPage} />
      <Stack.Screen name="AddFournisseurPage" component={AddFournisseurPage} />
      <Stack.Screen name="AddProductPage" component={AddProductPage} />
      <Stack.Screen name="AddReapproPage" component={AddReapproPage} />
      <Stack.Screen name="FacturesPage" component={FacturesPage} />
      <Stack.Screen name="ReapproPage" component={ReapproPage} />
      <Stack.Screen name="StockPage" component={StockPage} />


    </Stack.Navigator>
  );
};

export default AppNavigator;