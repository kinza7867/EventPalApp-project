import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DonationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💝 Support EventPal</Text>
      <Text style={styles.text}>
        Your donations help us organize better events and reach more people.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://www.paypal.com/donate')}
      >
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 15 },
  text: { color: '#ccc', fontSize: 16, marginBottom: 25 },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default DonationsScreen;
