import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Importez le composant BottomNav

const ReapproPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bouton Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>Shopping girl - Réapprovisionnement</Text>

      {/* Onglets */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate('StockPage')}>
          <Text style={styles.inactiveTab}>Produits</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ReapproPage')}>
          <Text style={styles.activeTab}>Réapprovisionnement</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des réapprovisionnements */}
      <Text style={styles.sectionTitle}>Liste des réapprovisionnements</Text>
      <View style={styles.reapproCard}>
        <Text style={styles.reapproTitle}>Réappro n°003-01/2025</Text>
        <Text style={styles.reapproDetails}>04/01/2025 - Chemise blanche - 20</Text>
        <Text style={styles.reapproPrice}>22000 Fcfa</Text>
      </View>
      <View style={styles.reapproCard}>
        <Text style={styles.reapproTitle}>Réappro n°003-01/2025</Text>
        <Text style={styles.reapproDetails}>04/01/2025 - Chemise blanche - 20</Text>
        <Text style={styles.reapproPrice}>22000 Fcfa</Text>
      </View>

      {/* Bouton Ajouter */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddReapproPage')}>
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
  reapproCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFC27A',
  },
  reapproTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reapproDetails: {
    fontSize: 14,
    color: '#666',
  },
  reapproPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF9500',
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

export default ReapproPage;