import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const UpdateProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/usuarios/me');
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário', error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.put(`/usuarios/${user.nome}`, user);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar dados', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={user.nome} onChangeText={(value) => handleChange('nome', value)} />
      <TextInput style={styles.input} placeholder="Endereço" value={user.endereco} onChangeText={(value) => handleChange('endereco', value)} />
      <TextInput style={styles.input} placeholder="Email" value={user.email} onChangeText={(value) => handleChange('email', value)} />
      <TextInput style={styles.input} placeholder="Telefone" value={user.telefone} onChangeText={(value) => handleChange('telefone', value)} />
      <Button title="Atualizar" onPress={handleSubmit} />
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

export default UpdateProfileScreen;
