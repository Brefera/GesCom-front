import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNav = ({ navigation }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home_page')}>
        <Ionicons name="home" size={24} color="#FF9500" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StockPage')}>
        <Ionicons name="cube" size={24} color="#A0A0A0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FacturesPage')}>
        <Ionicons name="document-text" size={24} color="#A0A0A0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={24} color="#A0A0A0" />
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
      flex: 1,  // Chaque icône prend un espace égal
      alignItems: 'center',
      padding: 9,
    },
  });
  
  

export default BottomNav;