import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterStep2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>S’inscrire</Text>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Bienvenue sur l’application GestCom, votre appli de gestion de facture</Text>

      {/* Champ Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Champ Mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#999"
        secureTextEntry
      />

      {/* Champ Confirmation du mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Confirmation"
        placeholderTextColor="#999"
        secureTextEntry
      />

      {/* Bouton "S'inscrire" */}
      <TouchableOpacity style={styles.registerButton}onPress={() => navigation.navigate('Home_page')}>
        <Text style={styles.registerButtonText}>S'inscrire</Text>
      </TouchableOpacity>

      {/* Lien "Déjà un compte ? Se connecter" */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Déjà un compte ? Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500', // Orange foncé
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF4500', // Orange foncé
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#FF4500', // Orange foncé
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RegisterStep2;