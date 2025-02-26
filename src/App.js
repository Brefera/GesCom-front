import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActiveTabProvider } from './components/ActiveTabContext'; // Importer le contexte
import { AuthStack, BoutiqueStack, FirstStack, HomeStack } from './navigation/stack';
import Toast from 'react-native-toast-message';

// Crée un navigateur de type Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="First" screenOptions={{ headerShown: false }}>
          {/* Page d'entrée */}
          <Stack.Screen name="First" component={FirstStack} />

          {/* Page d'authentification */}
          <Stack.Screen name="Auth" component={AuthStack} />

          {/* Page d'accueil */}
          <Stack.Screen name="Home" component={HomeStack} />

          {/* Page de visualisation de boutique */}
          <Stack.Screen name="Shop" component={BoutiqueStack} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Ajout de Toast ici */}
      <Toast />
    </>
  );
}