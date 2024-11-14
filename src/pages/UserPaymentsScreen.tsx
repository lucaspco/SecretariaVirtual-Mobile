import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../api';

const UserPaymentsScreen = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await api.get('/pagamentos/me');
        setPayments(response.data);
      } catch (error) {
        console.error('Erro ao carregar pagamentos', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pagamentos</Text>
      {payments.map((payment, index) => (
        <Text key={index} style={styles.text}>
          {payment.metodoPagamento} - R${payment.valor.toFixed(2)} - {payment.dataPagamento}
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

export default UserPaymentsScreen;
