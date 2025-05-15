import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

const sampleEvents = {
  'Music Events': [
    {
      id: '1',
      title: 'Lahore Music Night',
      date: '2025-06-15',
      location: 'Alhamra Hall, Lahore',
      image: 'https://images.unsplash.com/photo-1533106418989-88406c7e2b2c?w=800',
    },
    {
      id: '2',
      title: 'Islamabad Indie Fest',
      date: '2025-07-05',
      location: 'PNCA, Islamabad',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800',
    },
  ],
  'Tech Conferences': [
    {
      id: '3',
      title: 'TechX Lahore 2025',
      date: '2025-08-10',
      location: 'Expo Center, Lahore',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    },
    {
      id: '4',
      title: 'Women in Tech',
      date: '2025-09-12',
      location: 'NEST I/O, Karachi',
      image: 'https://images.unsplash.com/photo-1564865885917-51d5f52c44a4?w=800',
    },
  ],
  'Art Exhibitions': [
    {
      id: '5',
      title: 'Colors of Pakistan',
      date: '2025-07-20',
      location: 'Art Gallery, Lahore',
      image: 'https://images.unsplash.com/photo-1614747451100-c4c2bce55c21?w=800',
    },
  ],
  'Sports Events': [
    {
      id: '6',
      title: 'PSL Final 2025',
      date: '2025-05-30',
      location: 'Gaddafi Stadium, Lahore',
      image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800',
    },
  ],
  'Food Festivals': [
    {
      id: '7',
      title: 'Foodie Fest Islamabad',
      date: '2025-06-20',
      location: 'F-9 Park, Islamabad',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    },
  ],
};

const EventListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const events = sampleEvents[category] || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EventDetail', { event: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>📅 {item.date}</Text>
        <Text style={styles.info}>📍 {item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{category}</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
    padding: 16,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: screenWidth * 0.5,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});

export default EventListScreen;
