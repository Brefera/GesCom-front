import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const RegisterStep2Screen = ({ navigation }) => {
  const route = useRoute();

  const { firstname, lastname, tel } = route.params;
  console.log({ firstname }, { lastname }, { tel })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  const handlerAddUser = async () => {

    const data = {
      first_name: firstname,
      last_name: lastname,
      tel_user: tel,
      email,
      password,
      confirmpass
    }

    try {
      const response = await fetch('http://192.168.83.178:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      const res = await response.json();
      console.log(res);
  
      if (response.ok) {
        // 🎯 Redirect user to Login screen after successful registration
        Toast.show({
          type: 'success',
          text1: 'Inscription réussie 🎉',
          text2: 'Vous pouvez maintenant vous connecter.',
          position: 'top',
          visibilityTime: 3000,
          onHide: () => navigation.navigate('Login')
        });
      } else {
        Toast.show({ type: 'error', text1: 'Erreur', text2: res.message || 'Une erreur s’est produite.' });
      }
    } catch (error) {
      console.error('Erreur:', error);
      Toast.show({ type: 'error', text1: 'Erreur', text2: 'Une erreur s’est produite.' });
    }
  }
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
        value={email}  // Bind value to state
        onChangeText={setEmail} // Update state
      />

      {/* Champ Mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}  // Bind value to state
        onChangeText={setPassword} // Update state
      />

      {/* Champ Confirmation du mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Confirmation"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmpass}  // Bind value to state
        onChangeText={setConfirmpass} // Update state
      />

      {/* Bouton "S'inscrire" */}
      <TouchableOpacity style={styles.registerButton} onPress={handlerAddUser}>
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
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9500', // Orange foncé
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
    color: '#FF9500', // Orange foncé
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RegisterStep2Screen;