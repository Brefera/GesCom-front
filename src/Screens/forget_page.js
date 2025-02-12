import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Récupération de mot de passe</Text>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Entrer votre email d'inscription</Text>

      {/* Champ Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Bouton "Envoyer" */}
      <TouchableOpacity style={styles.sendButton}onPress={() => navigation.navigate('')}>
        <Text style={styles.sendButtonText}>Envoyer</Text>
      </TouchableOpacity>

      {/* Lien "Problème résolu ? Se connecter" */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Problème résolu ? Se connecter</Text>
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
  sendButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF4500', // Orange foncé
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  sendButtonText: {
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

export default ForgotPassword;