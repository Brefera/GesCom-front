import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen1 from './Screens/LoadingScreen1';
import LoadingScreen2 from './Screens/LoadingScreen2';
import LoginPage from './Screens/Login_page';
import RegisterStep1 from './Screens/Register_page1';
import RegisterStep2 from './Screens/Register_page2';
import ForgotPassword from './Screens/forget_page';
import ResetPassword from './Screens/ResetPassword';
import HomePage from './Screens/Home_page';
import AddshopPage from './Screens/AddShopPage';
import ShopDetailPage from './Screens/ShopDetailsPage';
import Notification_Page from './Screens/NotificationsPage';
import Client_Page from './Screens/ClientsPage';
import FournisseursPage from './Screens/FournisseursPage';
import AddFournisseurPage from './Screens/AddFournisseurPage';
import AddClientPage from './Screens/AddClientPage';
import AddProductPage from './Screens/AddProductPage';
import AddReapproPage from './Screens/AddReapproPage';
import FacturesPage from './Screens/FacturesPage';
import ReapproPage from './Screens/ReapproPage';
import StockPage from './Screens/StockPage';
import SettingPage from './Screens/settingPage';
import { ActiveTabProvider } from './components/ActiveTabContext'; // Importer le contexte

// Crée un navigateur de type Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <ActiveTabProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen1" screenOptions={{ headerShown: false }}>
          {/* Écran de chargement 1 */}
          <Stack.Screen name="LoadingScreen1" component={LoadingScreen1} />

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

          {/* Page de détail boutique */}
          <Stack.Screen name="ShopDetailsPage" component={ShopDetailPage} />

          {/* Page de notification boutique */}
          <Stack.Screen name="NotificationsPage" component={Notification_Page} />

          {/* Page de client */}
          <Stack.Screen name="ClientsPage" component={Client_Page} />

          {/* Page de fournisseur */}
          <Stack.Screen name="FournisseursPage" component={FournisseursPage} />

          {/* Page d'ajout client */}
          <Stack.Screen name="AddClientPage" component={AddClientPage} />

          {/* Page d'ajout fournisseur */}
          <Stack.Screen name="AddFournisseurPage" component={AddFournisseurPage} />

          {/* Page d'ajout produit */}
          <Stack.Screen name="AddProductPage" component={AddProductPage} />

          {/* Page d'ajout réapprovisionnement */}
          <Stack.Screen name="AddReapproPage" component={AddReapproPage} />

          {/* Page de factures */}
          <Stack.Screen name="FacturesPage" component={FacturesPage} />

          {/* Page de réapprovisionnement */}
          <Stack.Screen name="ReapproPage" component={ReapproPage} />

          {/* Page de stock */}
          <Stack.Screen name="StockPage" component={StockPage} />
          
         {/* Page de stock */}
         <Stack.Screen name="SettingPage" component={SettingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActiveTabProvider>
  );
}