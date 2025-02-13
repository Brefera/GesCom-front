import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  { id: '1', title: 'Stock de skirt presque vide', shop: 'Shopping girl', date: '12/11/2024' },
  { id: '2', title: 'Stock de skirt presque vide', shop: 'Shopping girl', date: '12/11/2024' },
  { id: '3', title: 'Stock de skirt presque vide', shop: 'Shopping girl', date: '12/11/2024' },
];

const Notification_Page = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home_page')}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>Recent</Text>

      <View style={styles.notificationSection}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationShop}>{item.shop}</Text>
                <Text style={styles.notificationDate}>Date: {item.date}</Text>
              </View>
              <Ionicons name="time-outline" size={20} color="#666" />
            </View>
          )}
        />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  notificationSection: {
    backgroundColor: '#FFE5CC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flex: 1,
  },
  notificationCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationShop: {
    fontSize: 14,
    color: '#666',
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notification_Page;
