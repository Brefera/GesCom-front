import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Importez le composant BottomNav

const FournisseursPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bouton Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ShopDetailsPage')}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>Shopping girl</Text>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate('ShopDetailsPage')}>
          <Text style={styles.inactiveTab}>Tableau de bord</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ClientsPage')}>
          <Text style={styles.inactiveTab}>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FournisseursPage')}>
          <Text style={styles.activeTab}>Fournisseurs</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des fournisseurs */}
      <Text style={styles.sectionTitle}>Liste des fournisseurs</Text>
      <View style={styles.supplierCard}><Text style={styles.supplierName}>Katherine Zye</Text></View>
      <View style={styles.supplierCard}><Text style={styles.supplierName}>Jean Martin</Text></View>
      <View style={styles.supplierCard}><Text style={styles.supplierName}>Alicia Bertin</Text></View>

      {/* Bouton Ajouter */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddFournisseurPage')}>
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
      {/* Barre de navigation en bas */}
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 50,
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
  supplierCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFC27A',
  },
  supplierName: {
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

export default FournisseursPage;
