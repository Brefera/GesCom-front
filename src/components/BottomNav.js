import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActiveTabContext } from '../App'; // Importer le contexte

const BottomNav = ({ navigation }) => {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext); // Utiliser le contexte

  return (
    <View style={styles.bottomNav}>
      {/* Accueil */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActiveTab('Home_page');
          navigation.navigate('Home_page');
        }}
      >
        <Ionicons
          name="home"
          size={24}
          color={activeTab === 'Home_page' ? '#FF9500' : '#A0A0A0'}
        />
      </TouchableOpacity>

      {/* Stock */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActiveTab('StockPage');
          navigation.navigate('StockPage');
        }}
      >
        <Ionicons
          name="cube"
          size={24}
          color={activeTab === 'StockPage' ? '#FF9500' : '#A0A0A0'}
        />
      </TouchableOpacity>

      {/* Factures */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActiveTab('FacturesPage');
          navigation.navigate('FacturesPage');
        }}
      >
        <Ionicons
          name="document-text"
          size={24}
          color={activeTab === 'FacturesPage' ? '#FF9500' : '#A0A0A0'}
        />
      </TouchableOpacity>

      {/* Paramètres */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setActiveTab('Settings');
          navigation.navigate('Settings');
        }}
      >
        <Ionicons
          name="settings"
          size={24}
          color={activeTab === 'Settings' ? '#FF9500' : '#A0A0A0'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderTopWidth: 0,
    borderTopColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0,
    width: '110%',
  },
  navItem: {
    flex: 1, // Chaque icône prend un espace égal
    alignItems: 'center',
    padding: 9,
  },
});

export default BottomNav;