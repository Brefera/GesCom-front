import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Changement de mot de passe</Text>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Renseignez le nouveau mot de passe</Text>

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

      {/* Bouton "Valider" */}
      <TouchableOpacity style={styles.validateButton}>
        <Text style={styles.validateButtonText}>Valider</Text>
      </TouchableOpacity>

      {/* Lien "Problème résolu ? Se connecter" */}
      <TouchableOpacity onPress={() => navigation.navigate('Login_page')}>
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
    color: '#FF9500', // Orange foncé
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
  validateButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9500', // Orange foncé
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  validateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#FF9500', // Orange foncé
    fontSize: 14,
    textAlign: 'center',
  },
});


export default ResetPassword;