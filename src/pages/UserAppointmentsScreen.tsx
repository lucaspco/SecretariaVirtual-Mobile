import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../api';

const UserAppointmentsScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get('/agendamentos/me');
        setAppointments(response.data);
      } catch (error) {
        console.error('Erro ao carregar consultas', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      {appointments.map((appointment, index) => (
        <Text key={index} style={styles.text}>
          {appointment.dataHora} - {appointment.descricao}
        </Text>
      ))}
      {/* Botão para navegar para a tela de atualização de consultas */}
      <Button
        title="Atualizar Consulta"
        onPress={() => navigation.navigate('UpdateAppointments')}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserAppointmentsScreen;
