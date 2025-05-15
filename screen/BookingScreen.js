import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const BookingScreen = () => {
  const bookedEvents = [
    {
      id: '101',
      title: 'AI & Innovation Summit 2024',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      date: 'July 22, 2025',
      venue: 'Tech Hall, Islamabad',
      status: 'Confirmed',
    },
    {
      id: '102',
      title: 'EventPal Developer Meetup',
      image:
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
      date: 'August 4, 2025',
      venue: 'Pearl Continental, Lahore',
      status: 'Confirmed',
    },
    {
      id: '103',
      title: 'Design Thinking Workshop',
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
      date: 'September 12, 2025',
      venue: 'Innovation Hub, Karachi',
      status: 'Pending',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      {bookedEvents.map((event) => (
        <View key={event.id} style={styles.card}>
          <Image source={{ uri: event.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.info}>📅 {event.date}</Text>
            <Text style={styles.info}>📍 {event.venue}</Text>
            <Text
              style={[
                styles.status,
                {
                  color: event.status === 'Confirmed' ? 'green' : 'orange',
                },
              ]}
            >
              Status: {event.status}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3f6fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
  },
  details: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default BookingScreen;
