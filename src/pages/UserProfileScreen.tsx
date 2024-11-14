import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../api';

const UserProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

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

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Nome: {user.nome}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Endereço: {user.endereco}</Text>
          <Text style={styles.text}>Telefone: {user.telefone}</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
      {/* Botão para navegar para a tela de atualização do perfil */}
      <Button
        title="Alterar Cadastro"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserProfileScreen;
