import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const AddReapproPage = ({ navigation }) => {
  const [product, setProduct] = useState('');
  const [supplier, setSupplier] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const handleSubmit = () => {
    console.log({ product, supplier, date, quantity, unitPrice, totalPrice });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Ajout Réapprovisionnement</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Produit concerné</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={product}
          onChangeText={setProduct}
        />

        <Text style={styles.label}>Fournisseur</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={supplier}
          onChangeText={setSupplier}
        />

        <Text style={styles.label}>Date de réapprovisionnement</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Quantité</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <Text style={styles.label}>Prix unitaire</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={unitPrice}
          onChangeText={setUnitPrice}
        />

        <Text style={styles.label}>Prix total</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={totalPrice}
          onChangeText={setTotalPrice}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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

export default AddReapproPage;
