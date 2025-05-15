import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EventDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { event, onLikeToggle, isLiked } = route.params;

  const handleLikePress = () => {
    onLikeToggle(event);
  };

  const handleBooking = () => {
    navigation.navigate('Booking', { event });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅ Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>📅 {event.date}</Text>
          <Text style={styles.info}>📍 {event.location}</Text>
          <Text style={styles.info}>📞 {event.contact}</Text>
        </View>

        <Text style={styles.description}>{event.description}</Text>

        <TouchableOpacity
          style={[styles.likeButton, isLiked ? styles.liked : styles.notLiked]}
          onPress={handleLikePress}
        >
          <Text style={styles.likeButtonText}>
            {isLiked ? '💖 Liked' : '🤍 Like Event'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>📩 Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0fa',
  },
  eventImage: {
    width: '100%',
    height: 240,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#007acc',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e3a59',
    marginBottom: 12,
  },
  infoBox: {
    marginBottom: 14,
  },
  info: {
    fontSize: 15,
    color: '#555',
    marginVertical: 2,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
  },
  likeButton: {
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  liked: {
    backgroundColor: '#ff5c8a',
  },
  notLiked: {
    backgroundColor: '#007acc',
  },
  likeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetails;
