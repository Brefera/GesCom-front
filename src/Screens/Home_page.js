import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerPrefix}>Bonjour, </Text>
          <Text style={styles.headerName}>Sara</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}onPress={() => navigation.navigate('NotificationsPage')}>
          <Ionicons name="notifications-outline" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche"
          placeholderTextColor="#A0A0A0"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={20} color="#A0A0A0" />
        </TouchableOpacity>
      </View>

      <View style={styles.shopSection}>
        <Text style={styles.sectionTitle}>Mes boutiques</Text>
        <View style={styles.shopCard}>
          <View>
            <Text style={styles.shopName}>Shopping girl</Text>
            <Text style={styles.shopDate}>Date de création: 12/10/2024</Text>
          </View>
          <TouchableOpacity style={styles.seeMoreButton}onPress={() => navigation.navigate('ShopDetailsPage')}>
            <Text style={styles.seeMore}>Voir +</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddShopPage')}
      >
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPrefix: {
    fontSize: 24,
    color: '#1A1A1A',
    fontWeight: '400',
  },
  headerName: {
    fontSize: 24,
    color: '#FF9500',
    fontWeight: '700',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
  searchContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 16,
    paddingRight: 48,
    fontSize: 16,
    color: '#1A1A1A',
  },
  searchIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  shopSection: {
    backgroundColor: '#FFF6E9',
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  shopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  shopName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1A1A1A',
  },
  shopDate: {
    fontSize: 14,
    color: '#808080',
  },
  seeMoreButton: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  seeMore: {
    color: '#FF9500',
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 24,
    backgroundColor: '#FF9500',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF9500',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
});

export default HomePage;
