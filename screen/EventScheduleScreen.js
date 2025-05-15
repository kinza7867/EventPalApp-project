import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const schedule = [
  { id: '1', time: '10:00 AM', event: 'Opening Ceremony' },
  { id: '2', time: '11:30 AM', event: 'Tech Talk: Future of AI' },
  { id: '3', time: '1:00 PM', event: 'Lunch Break' },
  { id: '4', time: '2:00 PM', event: 'Workshop: App Development' },
  { id: '5', time: '4:00 PM', event: 'Closing Ceremony' },
];

const EventScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Event Schedule</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.event}>{item.event}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 20 },
  item: {
    backgroundColor: '#1f2937',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  time: { color: '#9ca3af', fontSize: 14 },
  event: { color: '#fff', fontSize: 18 },
});

export default EventScheduleScreen;
