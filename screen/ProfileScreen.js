import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const pastEvents = [
    {
      id: '1',
      title: 'Tech Conference 2023',
      date: 'March 15, 2023',
      location: 'Expo Center, Lahore',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTCE0auxzIXdrf5HKT_bf4N_n8ECxur4Fjg&s',
    },
    {
      id: '2',
      title: 'Women in IT Summit',
      date: 'June 10, 2023',
      location: 'Pearl Continental, Karachi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJlWaBCQpcPrpq2fSzSHbc29507xZ7WNoKg&s',
    },
    {
      id: '3',
      title: 'React Native Workshop',
      date: 'September 5, 2023',
      location: 'Arfa Tower, Lahore',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SnOpTj3TjAKOMM5z5QMfHDcbufTeQDMowg&s',
    },
  ];

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out!');
    navigation.navigate('Login');
  };

  const handleContact = () => {
    Linking.openURL('mailto:kinza@example.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://media.gettyimages.com/id/2156170315/photo/a-cheerful-female-party-planner-holds-a-clipboard-in-her-hands-while-looking-directly-at-the.jpg?s=612x612&w=gi&k=20&c=Ilz_FEGu2O03doHZLpvOyP2bKIP0DabkDwGwONVcGnQ=',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Kinza Ali</Text>
      <Text style={styles.bio}>Aspiring App Developer | Event Enthusiast 🎉</Text>
      <Text style={styles.about}>📍 Islamabad, Pakistan</Text>
      <Text style={styles.about}>🎓 5th Semester - BS Computer Science</Text>
      <Text style={styles.about}>🎂 Date of Birth: 25-Nov-2005</Text>
      <Text style={styles.about}>📧 kinzayymalikk.7867@gmail.com</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Events</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>345+</Text>
          <Text style={styles.statLabel}>Participants</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Years</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>My Past Events</Text>
      {pastEvents.map(event => (
        <View key={event.id} style={styles.eventCard}>
          <Image source={{ uri: event.image }} style={styles.eventImage} />
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDetails}>📅 {event.date}</Text>
          <Text style={styles.eventDetails}>📍 {event.location}</Text>
        </View>
      ))}

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyBookings')}>
          <Text style={styles.buttonText}>My Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleContact}>
          <Text style={styles.buttonText}>Contact Me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    paddingBottom: 50,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: 30,
    borderWidth: 4,
    borderColor: '#FF6B81',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#222',
  },
  bio: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
    marginBottom: 8,
  },
  about: {
    fontSize: 14,
    color: '#777',
  },
  statsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    width: '90%',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  eventCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    color: '#444',
  },
  eventDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  buttonGroup: {
    marginTop: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#f85c5c',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
