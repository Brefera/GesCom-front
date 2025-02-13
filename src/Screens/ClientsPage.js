import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClientsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bouton Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>Shopping girl</Text>
      <View style={styles.tabs}>
        <Text style={styles.inactiveTab}>Tableau de bord</Text>
        <Text style={styles.activeTab}>Clients</Text>
        <Text style={styles.inactiveTab}>Fournisseurs</Text>
      </View>

      {/* Liste des clients */}
      <Text style={styles.sectionTitle}>Liste des clients</Text>
      <View style={styles.clientCard}><Text style={styles.clientName}>Katherine Zye</Text></View>
      <View style={styles.clientCard}><Text style={styles.clientName}>Jean Martin</Text></View>
      <View style={styles.clientCard}><Text style={styles.clientName}>Alicia Bertin</Text></View>

      {/* Bouton Ajouter */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  inactiveTab: {
    color: '#888',
    fontSize: 14,
  },
  activeTab: {
    color: '#FF9500',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  clientCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFC27A',
  },
  clientName: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#FF9500',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default ClientsPage;
