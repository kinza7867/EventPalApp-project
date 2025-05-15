import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const PaymentScreen = () => {
  const transactions = [
    {
      id: '1',
      title: 'React Native Workshop',
      date: 'May 10, 2025',
      amount: 'PKR 2500',
      method: 'Payoneer',
      status: 'Paid',
      image:
        'https://logos-world.net/wp-content/uploads/2021/03/React-Native-Emblem.png',
    },
    {
      id: '2',
      title: 'AI Conference 2024',
      date: 'April 22, 2025',
      amount: 'PKR 5000',
      method: 'Payoneer',
      status: 'Paid',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/49/Artificial_intelligence_icon.jpg',
    },
    {
      id: '3',
      title: 'Design Meetup',
      date: 'March 18, 2025',
      amount: 'PKR 1800',
      method: 'Payoneer',
      status: 'Pending',
      image:
        'https://cdn-icons-png.flaticon.com/512/1250/1250615.png',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment History</Text>
      {transactions.map((tx) => (
        <View key={tx.id} style={styles.card}>
          <Image source={{ uri: tx.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.eventTitle}>{tx.title}</Text>
            <Text style={styles.text}>📅 {tx.date}</Text>
            <Text style={styles.text}>💳 {tx.method}</Text>
            <Text style={styles.text}>💰 {tx.amount}</Text>
            <Text
              style={[
                styles.status,
                {
                  color: tx.status === 'Paid' ? 'green' : 'orange',
                },
              ]}
            >
              Status: {tx.status}
            </Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage Payments (Payoneer)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f8fc',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    marginTop: 6,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentScreen;
