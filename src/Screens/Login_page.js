import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Se connecter</Text>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>Bon retour sur votre application de gestion de facture</Text>

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

      {/* Lien "Mot de passe oublié ?" */}
      <TouchableOpacity onPress={() => navigation.navigate('forget_page')}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton "Se connecter" */}
      <TouchableOpacity style={styles.loginButton}onPress={() => navigation.navigate('Home_page')}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Séparateur "ou" */}
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ou</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Bouton "Gmail" */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../../assets/Google_logo.png')} // Remplace par le chemin de ton icône Gmail
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Gmail</Text>
      </TouchableOpacity>

      {/* Lien "Pas encore de compte ? Créez-en un" */}
      <TouchableOpacity onPress={() => navigation.replace('Register_page1')}>
        <Text style={styles.registerLink}>Pas encore de compte ? <Text style={styles.registerLinkGreen}>Créez-en un</Text></Text>
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
    marginBottom: 10,
    color: '#FF4500', // Orange foncé
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
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
  forgotPassword: {
    color: '#FF4500', // Orange foncé
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF4500', // Orange foncé
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  registerLink: {
    color: '#FF4500', // Orange foncé
    fontSize: 14,
  },
});

export default LoginPage;