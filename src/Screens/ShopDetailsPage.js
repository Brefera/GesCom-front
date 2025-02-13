import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShopDetailPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Bouton retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home_page')}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>Shopping girl</Text>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <Text style={styles.inactiveTab}>Tableau de bord</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ClientsPage')}>
          <Text style={styles.activeTab}>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveTab}>Fournisseurs</Text>
        </TouchableOpacity>
      </View>

      {/* Statistiques */}
      <Text style={styles.sectionTitle}>Statistiques</Text>
      <View style={styles.statsContainer}>
        <View style={styles.chartPlaceholder}></View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statPercentage}>30%</Text>
            <Text style={styles.statLabel}>Articles Vendus</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statPercentage}>70%</Text>
            <Text style={styles.statLabel}>Reste</Text>
          </View>
        </View>
      </View>
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
  statsContainer: {
    backgroundColor: '#FFE5CC',
    padding: 20,
    borderRadius: 15,
  },
  chartPlaceholder: {
    height: 120,
    backgroundColor: '#FFC27A',
    borderRadius: 10,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  statPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9500',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default ShopDetailPage;
