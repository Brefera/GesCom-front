import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddProductPage = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [productReference, setProductReference] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [stockThreshold, setStockThreshold] = useState('');
  const [productImage, setProductImage] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = () => {
    console.log({
      productName,
      category,
      brand,
      productReference,
      purchasePrice,
      salePrice,
      stockThreshold,
      productImage,
      dimensions,
      weight,
    });
    // Rediriger l'utilisateur ou effectuer une autre action
    navigation.goBack();
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Ajout Produit</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nom du produit</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={productName}
          onChangeText={setProductName}
        />

        <Text style={styles.label}>Catégorie</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={category}
          onChangeText={setCategory}
        />

        <Text style={styles.label}>Marque</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={brand}
          onChangeText={setBrand}
        />

        <Text style={styles.label}>Référence du produit</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={productReference}
          onChangeText={setProductReference}
        />

        <Text style={styles.label}>Prix d'achat</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={purchasePrice}
          onChangeText={setPurchasePrice}
        />

        <Text style={styles.label}>Prix de vente</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={salePrice}
          onChangeText={setSalePrice}
        />

        <Text style={styles.label}>Seuil en stock</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          keyboardType="numeric"
          value={stockThreshold}
          onChangeText={setStockThreshold}
        />

        <Text style={styles.label}>Image du produit</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={productImage}
          onChangeText={setProductImage}
        />

        <Text style={styles.label}>Dimension - Taille</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={dimensions}
          onChangeText={setDimensions}
        />

        <Text style={styles.label}>Poids - opt</Text>
        <TextInput
          style={styles.input}
          placeholder="saisir"
          value={weight}
          onChangeText={setWeight}
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

export default AddProductPage;