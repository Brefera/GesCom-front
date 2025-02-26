import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import { HomeTabs } from './home-tabs';
import SplashScreen from '../Screens/splash-page';
import LoadingScreen from '../Screens/loading';
import LoginScreen from '../Screens/authentication/Login-screen';
import RegisterStep1Screen from '../Screens/authentication/register-screen-1';
import RegisterStep2Screen from '../Screens/authentication/register-screen-2';
import ForgotPasswordScreen from '../Screens/authentication/forget-sreen';
import ResetPasswordScreen from '../Screens/authentication/reset-password';
import { ShopTabs } from './home-tabs';

const Stack = createStackNavigator();

export const FirstStack = () => {
    const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

export const AuthStack = () => {
  const navigation = useNavigation()
return (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register 1" component={RegisterStep1Screen} />
    <Stack.Screen name="Register 2" component={RegisterStep2Screen} />
    <Stack.Screen name="Forget" component={ForgotPasswordScreen} />
    <Stack.Screen name="Reset" component={ResetPasswordScreen} />
  </Stack.Navigator>
);
}

export const HomeStack = () => {
  const navigation = useNavigation()
return (
  <Stack.Navigator screenOptions={()=>navOptions(navigation)}>
    <Stack.Screen name="Home" component={HomeTabs} />
  </Stack.Navigator>
);
}

export const BoutiqueStack = () => {
  const navigation = useNavigation()
return (
  <Stack.Navigator screenOptions={()=>navOptions(navigation)}>
    <Stack.Screen name="Shop" component={ShopTabs} />
  </Stack.Navigator>
);
}

// export const ProfileStack = () => {
//     const navigation = useNavigation()
//   return (
//     <Stack.Navigator screenOptions={()=>navOptions(navigation)}>
//       <Stack.Screen name="Profiles" component={ProfileScreen} />
//       <Stack.Screen name="Profile" component={ProfileDetailScreen} />
//     </Stack.Navigator>
//   );
// }
