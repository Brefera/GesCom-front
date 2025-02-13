import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterStep1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>S’inscrire</Text>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Bienvenue sur l’application GestCom, votre appli de gestion de facture</Text>

      {/* Champ Nom */}
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor="#999"
      />

      {/* Champ Prénoms */}
      <TextInput
        style={styles.input}
        placeholder="Prénoms"
        placeholderTextColor="#999"
      />

      {/* Champ Téléphone */}
      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />

      {/* Bouton "Suivant" */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Register_page2')} // Redirige vers la deuxième étape d'inscription
      >
        <Text style={styles.nextButtonText}>Suivant</Text>
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
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9500', // Orange foncé
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#FF9500', // Orange foncé
    fontSize: 14,
  },
});

export default RegisterStep1;