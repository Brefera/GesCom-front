import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen2 = ({ navigation }) => {
  useEffect(() => {
    // Simule un chargement de 2 secondes
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Redirige vers la page de connexion
    }, 2000);

    // Nettoie le timer si le composant est démonté
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo au centre */}
      <Image
        source={require('../../assets/logo1.png')} // Chemin corrigé
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fond orange
  },
  logo: {
    width: 150, // Ajuste la largeur du logo
    height: 150, // Ajuste la hauteur du logo
    resizeMode: 'contain', // Garde les proportions du logo
  },
});

export default LoadingScreen2;