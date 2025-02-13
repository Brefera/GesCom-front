import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddClientPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ClientsPage')}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Ajout client</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nom & prénom</Text>
        <TextInput style={styles.input} placeholder="saisir" value={name} onChangeText={setName} />
        
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} placeholder="saisir" value={address} onChangeText={setAddress} />
        
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="saisir" value={email} onChangeText={setEmail} />
        
        <Text style={styles.label}>Numéro de téléphone</Text>
        <TextInput style={styles.input} placeholder="+225 | XX XX XX XX XX" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        
        <Text style={styles.label}>Statut</Text>
        <TextInput style={styles.input} placeholder="saisir" value={status} onChangeText={setStatus} />
        
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ClientsPage')}>
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
    paddingTop: 50,
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

export default AddClientPage;
