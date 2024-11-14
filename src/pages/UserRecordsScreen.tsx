import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../api';

const UserRecordsScreen = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await api.get('/prontuarios/me');
        setRecords(response.data);
      } catch (error) {
        console.error('Erro ao carregar prontuários', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Prontuários</Text>
      {records.map((record, index) => (
        <Text key={index} style={styles.text}>
          {record.prontuario}
        </Text>
      ))}
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
  },
});

export default UserRecordsScreen;
