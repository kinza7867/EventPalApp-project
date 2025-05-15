import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

// For responsive width
const screenWidth = Dimensions.get('window').width;

const MyBookingsScreen = () => {
  const bookedEvents = [
    {
      id: '1',
      title: 'Startup Meetup 2024',
      date: '2024-12-10',
      location: 'Lahore, Pakistan',
      image: 'https://images.unsplash.com/photo-1515162305284-8d33b2fb98e2',
    },
    {
      id: '2',
      title: 'Mobile Dev Summit',
      date: '2024-12-20',
      location: 'Karachi, Pakistan',
      image: 'https://images.unsplash.com/photo-1581092919533-69a6baf8dffb',
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎟️ My Bookings</Text>

      {bookedEvents.length === 0 ? (
        <Text style={styles.emptyText}>You haven't booked any events yet.</Text>
      ) : (
        bookedEvents.map((event) => (
          <View key={event.id} style={styles.card}>
            <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.text}>📅 {formatDate(event.date)}</Text>
              <Text style={styles.text}>📍 {event.location}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f8fa',
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e1e1e',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 60,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
  },
  image: {
    width: screenWidth - 32,
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 14,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 2,
  },
});

export default MyBookingsScreen;
