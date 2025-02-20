import React, { useContext, useEffect } from 'react'; // Importez React et les hooks en une seule ligne
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Importez le composant BottomNav
import { ActiveTabContext } from '../components/ActiveTabContext'; // Importer le contexte

const SettingPage = ({ navigation }) => {
  const { setActiveTab } = useContext(ActiveTabContext); // Utiliser le contexte

  // Définir l'onglet actif lorsque la page est montée
  useEffect(() => {
    setActiveTab('settingPage');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Read Clients</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>AddError</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rules</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>None</Text>
        </View>
      </View>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginLeft: 20,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SettingPage;