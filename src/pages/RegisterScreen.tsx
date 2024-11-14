import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
  });

  const handleChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async () => {
    try {
      await api.post('/usuarios/registro', user);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro. Verifique os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={(value) => handleChange('nome', value)} />
      <TextInput style={styles.input} placeholder="Endereço" onChangeText={(value) => handleChange('endereco', value)} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => handleChange('email', value)} />
      <TextInput style={styles.input} placeholder="Telefone" onChangeText={(value) => handleChange('telefone', value)} />
      <TextInput style={styles.input} placeholder="CPF" onChangeText={(value) => handleChange('cpf', value)} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={(value) => handleChange('senha', value)} />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default RegisterScreen;
