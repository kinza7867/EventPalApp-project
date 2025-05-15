import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CreateEventScreen = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');

  const handleCreate = () => {
    if (!eventName || !date) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Event "${eventName}" created on ${date}!`);
    setEventName('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✍️ Create New Event</Text>
      <TextInput
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Date (e.g., May 20, 2025)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 20 },
  input: {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});

export default CreateEventScreen;
