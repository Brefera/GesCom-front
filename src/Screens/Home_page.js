import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pour les icônes

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bonjour, Sara</Text>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Recherche..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Section "Mes boutiques" */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes boutiques</Text>
        <Text style={styles.sectionContent}>Shopping girl</Text>
      </View>

      {/* Section "Vêtement" */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vêtement</Text>
        <Text style={styles.sectionContent}>Date de création : 12/10/2024</Text>
      </View>

      {/* Barre de navigation en bas */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#007bff" />
          <Text style={styles.navText}>Accueil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="#666" />
          <Text style={styles.navText}>Recherche</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart" size={24} color="#666" />
          <Text style={styles.navText}>Favoris</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default HomePage;