import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddshopPage = ({ navigation }) => {
  const [shopName, setShopName] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Logique pour enregistrer la boutique
    console.log({ shopName, type, address, contact, description });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home_page')}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Ajout d'une boutique</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nom de la boutique</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrer le nom"
          value={shopName}
          onChangeText={setShopName}
        />

        <Text style={styles.label}>Type</Text>
        <TextInput
          style={styles.input}
          placeholder="-- Type --"
          value={type}
          onChangeText={setType}
        />

        <Text style={styles.label}>Adresse</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrer l'adresse"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Contact</Text>
        <TextInput
          style={styles.input}
          placeholder="+225 | XX XX XX XX XX"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={setContact}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Quelques informations"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home_page')}>
          <Text style={styles.submitButtonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 40, // Ajout de l'espace en haut
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FFE5CC',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default AddshopPage;
