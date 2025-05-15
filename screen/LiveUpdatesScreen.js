import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveUpdatesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📢 Live Updates</Text>
      <Text style={styles.update}>🕒 10:00 AM - Event Started</Text>
      <Text style={styles.update}>✅ Keynote Speaker is live</Text>
      <Text style={styles.update}>🎤 Workshop Registration Closed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 15 },
  update: { color: '#fff', fontSize: 16, marginBottom: 10 },
});

export default LiveUpdatesScreen;
