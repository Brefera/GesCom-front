import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen1 from './Screens/LoadingScreen1'; // Premier écran de chargement
import LoadingScreen2 from './Screens/LoadingScreen2'; // Deuxième écran de chargement
import LoginPage from './Screens/Login_page'; // Page de connexion
import RegisterStep1 from './Screens/Register_page1'; // Étape 1 d'inscription
import RegisterStep2 from './Screens/Register_page2'; // Étape 2 d'inscription
import ForgotPassword from './Screens/forget_page'; // Page de mot de passe oublié
import ResetPassword from './Screens/ResetPassword'; // Page de réinitialisation du mot de passe
import HomePage from './Screens/Home_page'; // Page d'accueil
import AddshopPage from './Screens/AddShopPage'; //page d'ajout de boutique
import ShopDetailPage from './Screens/ShopDetailsPage';
import Notification_Page from './Screens/NotificationsPage';
import Client_Page from './Screens/ClientsPage';

// Crée un navigateur de type Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading1" screenOptions={{ headerShown: false }}>
        {/* Écran de chargement 1 */}
        <Stack.Screen name="Loading1" component={LoadingScreen1} />

        {/* Écran de chargement 2 */}
        <Stack.Screen name="Loading2" component={LoadingScreen2} />

        {/* Page de connexion */}
        <Stack.Screen name="Login" component={LoginPage} />

        {/* Étape 1 d'inscription */}
        <Stack.Screen name="Register_page1" component={RegisterStep1} />

        {/* Étape 2 d'inscription */}
        <Stack.Screen name="Register_page2" component={RegisterStep2} />

        {/* Page de mot de passe oublié */}
        <Stack.Screen name="forget_page" component={ForgotPassword} />

        {/* Page de réinitialisation du mot de passe */}
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        {/* Page d'accueil */}
        <Stack.Screen name="Home_page" component={HomePage} />

        {/* Page d'ajout de boutique */}
        <Stack.Screen name="AddShopPage" component={AddshopPage} />

        {/* Page de detaille boutique*/}
        <Stack.Screen name="ShopDetailsPage" component={ShopDetailPage} />

        {/* Page de notification boutique */}
        <Stack.Screen name="NotificationsPage" component={Notification_Page} />

        {/* Page de client*/}
        <Stack.Screen name="ClientsPage" component={Client_Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
