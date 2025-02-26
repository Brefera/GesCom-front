import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to refresh token
const refreshAuthToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
      return null; // No refresh token found
    }

    const response = await fetch('http://192.168.83.178:8000/api/token/refresh/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    const data = await response.json();

    if (response.ok) {
      await AsyncStorage.setItem('accessToken', data.access);
      return data.access;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      const newToken = await refreshAuthToken();
      if (newToken) {
        navigation.replace('Home'); // Redirect if token is valid
      }
    };
    checkAndRefreshToken();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Erreur',
        text2: 'Veuillez remplir tous les champs',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://192.168.83.178:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in AsyncStorage
        await AsyncStorage.setItem('accessToken', response.data.access);
        await AsyncStorage.setItem('refreshToken', response.data.refresh);

        Toast.show({
          type: 'success',
          text1: 'Connexion réussie 🎉',
          text2: 'Bienvenue sur votre application',
        });

        // Stocker le token si nécessaire
        // await AsyncStorage.setItem('token', data.token);

        setTimeout(() => {
          navigation.replace('Home'); // Redirection après succès
        }, 1500);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Erreur de connexion',
          text2: data.message || 'Email ou mot de passe incorrect',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erreur',
        text2: 'Identifiants incorrects.',
      });
    } finally {
      setLoading(false);
    }
  };
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
        // keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Champ Mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Lien "Mot de passe oublié ?" */}
      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton "Se connecter" */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        <Text style={styles.loginButtonText}>{loading ? 'Connexion...' : 'Se connecter'}</Text>
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
          source={require('../../../assets/Google_logo.png')} // Remplace par le chemin de ton icône Gmail
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Gmail</Text>
      </TouchableOpacity>

      {/* Lien "Pas encore de compte ? Créez-en un" */}
      <TouchableOpacity onPress={() => navigation.replace('Register 1')}>
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
    color: '#FF9500', // Orange foncé
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
    color: '#FF9500', // Orange foncé
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9500', // Orange foncé
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
    color: '#FF9500', // Orange foncé
    fontSize: 14,
  },
});

export default LoginScreen;