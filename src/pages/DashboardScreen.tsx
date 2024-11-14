import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import authService from '../authService';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Certifique-se de instalar e importar

const DashboardScreen = ({ navigation }) => {
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

  const handleLogout = async () => {
    try {
      await authService.logout(); // Chama o logout no serviço de autenticação, se necessário
      await AsyncStorage.removeItem('authToken'); // Remove o token do armazenamento
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }], // Navega para a tela Home e limpa o stack de navegação
      });
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, {user ? user.nome : 'Carregando...'}</Text>
      <Button title="Meu Perfil" onPress={() => navigation.navigate('UserProfile')} />
      <Button title="Pagamentos" onPress={() => navigation.navigate('UserPayments')} />
      <Button title="Consultas" onPress={() => navigation.navigate('UserAppointments')} />
      <Button title="Prontuários" onPress={() => navigation.navigate('UserRecords')} />
      <Button title="Logout" onPress={handleLogout} /> {/* Botão de Logout */}
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
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DashboardScreen;
