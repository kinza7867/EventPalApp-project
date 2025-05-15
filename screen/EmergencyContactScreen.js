import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const EmergencyContactScreen = () => {
  const callHelp = () => {
    Linking.openURL('tel:911');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 Emergency Contact</Text>
      <Text style={styles.text}>If you need urgent assistance, call the help center:</Text>
      <TouchableOpacity onPress={callHelp}>
        <Text style={styles.phone}>📞 911</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#ef4444', marginBottom: 15 },
  text: { color: '#ccc', fontSize: 16, marginBottom: 10 },
  phone: { fontSize: 20, color: '#10b981', fontWeight: 'bold' },
});

export default EmergencyContactScreen;
