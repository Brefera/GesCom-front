import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from '../Screens/Login_page'; // Page de connexion
import RegisterStep1 from '../Screens/Register_page1'; // Première étape d'inscription
import RegisterStep2 from '../Screens/Register_page2'; // Deuxième étape d'inscription
import LoadingScreen1 from '../Screens/LoadingScreen1'; // Premier écran de chargement
import LoadingScreen2 from '../Screens/LoadingScreen2'; // Deuxième écran de chargement
import HomePage from '../Screens/Home_page';


// Crée un navigateur de type Stack
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoadingScreen1" screenOptions={{ headerShown: false }}>
      {/* Premier écran de chargement */}
      <Stack.Screen
        name="LoadingScreen1"
        component={LoadingScreen1}
      />
      {/* Deuxième écran de chargement */}
      <Stack.Screen
        name="LoadingScreen2"
        component={LoadingScreen2}
      />
      {/* Page de connexion */}
      <Stack.Screen
        name="Login"
        component={Loginpage}
      />
      {/* Première étape d'inscription */}
      <Stack.Screen
        name="Register_page1"
        component={RegisterStep1}
      />
      {/* Deuxième étape d'inscription */}
      <Stack.Screen
        name="Register_page2"
        component={RegisterStep2}
      />
      {/* Page d'accueil */}
      <Stack.Screen
        name="Home_page"
        component={HomePage}
      />
      {/* Page de récupération de mot de passe */}
      <Stack.Screen
        name="forget_page"
        component={ForgotPassword}
      />
      {/* Page de changement de mot de passe */}
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;