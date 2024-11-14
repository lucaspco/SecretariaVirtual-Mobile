import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const UpdateAppointmentsScreen = ({ navigation }) => {
  const [descricao, setDescricao] = useState('');
  const [dataHora, setDataHora] = useState('');

  const handleSubmit = async () => {
    try {
      await api.post('/agendamentos', { descricao, dataHora });
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar agendamento', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
      <TextInput style={styles.input} placeholder="Data e Hora" value={dataHora} onChangeText={setDataHora} />
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

export default UpdateAppointmentsScreen;
