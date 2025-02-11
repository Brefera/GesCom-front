import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen1 = ({ navigation }) => {
  useEffect(() => {
    // Simule un chargement de 2 secondes
    setTimeout(() => {
      navigation.replace('Loading2'); // Redirige vers le deuxième écran de chargement
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo au centre */}
      <Image
        source={require('../../assets/logo.png')} // Remplace par le chemin de ton logo
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
    backgroundColor: '#ED8F03', // Fond orange
  },
  logo: {
    width: 250, // Ajuste la largeur du logo
    height: 250, // Ajuste la hauteur du logo
    resizeMode: 'contain', // Garde les proportions du logo
  },
});

export default LoadingScreen1;