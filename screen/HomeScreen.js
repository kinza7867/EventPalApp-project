import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    image: 'https://cdn.ain.ua/en/articles/2025-01-07/4w3x55gS7xAI8pXgrG3JN3ZdPLmSitJc9lxb1qKD.webp',
    description: 'The biggest tech event with top-tier speakers.',
    location: 'San Francisco, USA',
    date: 'May 20, 2025',
    contact: 'info@techconf.com',
  },
  {
    id: '2',
    title: 'EDM Music Festival',
    image: 'https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Blog/eb/7b/eb7b3ad4-ba74-4b56-9d0c-91d1e2076df0.jpg',
    description: 'Electrifying weekend with DJs and lights.',
    location: 'Central Park, New York',
    date: 'June 10–12, 2025',
    contact: 'contact@musicfest.com',
  },
  {
    id: '3',
    title: 'Traditional Wedding Expo',
    image: 'https://flowerbouquet.pk/cdn/shop/articles/d9855c81-262f-4d79-a8f2-b198d71d6f24_d043b0e4-bd04-48e5-87ab-ecf4e8557660.jpg?v=1745848161&width=1100',
    description: 'Explore decor, planners, and bridal fashion.',
    location: 'Lahore, Pakistan',
    date: 'June 15, 2025',
    contact: 'wedding@expo.com',
  },
  {
    id: '4',
    title: 'Birthday Party Planning',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAosE4X9kXo3P5CPJMz4o6eGelAer-6G1yw&s',
    description: 'Colorful fun with cakes, games & music.',
    location: 'Islamabad, PK',
    date: 'June 18, 2025',
    contact: 'party@celebrations.pk',
  },
  {
    id: '5',
    title: 'Startup Pitch Day',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAiprWbS8mJaWqbfHsQ0vDOgP2yecg8sNTw&s',
    description: 'Entrepreneurs pitch ideas to investors.',
    location: 'Silicon Valley, USA',
    date: 'July 5, 2025',
    contact: 'pitch@startuplab.com',
  },
    {
    id: '6',
    title: 'Women in Tech Summit',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1vTHlTPuFFJxEhzvoTLpRQgzPMwlDX-Onw&s',
    description: 'Empowering women leaders in technology and innovation.',
    location: 'Toronto, Canada',
    date: 'July 15, 2025',
    contact: 'contact@wits2025.org',
  },
  {
    id: '7',
    title: 'International Book Fair',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjmcWg0NgAhR8PRDpaHTeA50Aod82WG2BgQ&s',
    description: 'A gathering of authors, publishers, and readers.',
    location: 'Frankfurt, Germany',
    date: 'August 3–7, 2025',
    contact: 'info@bookfair.de',
  },
  {
    id: '8',
    title: 'AI & Robotics Expo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlJphir2R2RVutI4OXrKm4gkFfp4oXphbHQ&s',
    description: 'Explore next-gen robotics and machine learning demos.',
    location: 'Dubai World Trade Center',
    date: 'August 25, 2025',
    contact: 'expo@airobotics.com',
  },
  {
    id: '9',
    title: 'Fashion Forward Showcase',
    image: 'https://dw4kuum04wqjb.cloudfront.net/mojeh-bucket-prod/large_rsz_ffwd_6_532ce85fa9.jpg',
    description: 'Runway show of upcoming designers and couture collections.',
    location: 'Paris, France',
    date: 'September 1, 2025',
    contact: 'style@fashionforward.com',
  },
  {
    id: '10',
    title: 'National Coding Hackathon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClQ7uGnb_gYeOb18FDOaJQn-BNIOVc6WIBKkHLkbUBGoU23XdZ0ium8XU1XlaSFkpvNY&usqp=CAU',
    description: '24-hour coding challenge for students and developers.',
    location: 'Mumbai, India',
    date: 'September 12, 2025',
    contact: 'hackathon@codeindia.in',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [likedEvents, setLikedEvents] = useState([]);

  const handleEventPress = (event) => {
    navigation.navigate('EventDetail', {
      event,
      onLikeToggle: handleLikeToggle,
      isLiked: likedEvents.includes(event.id),
    });
  };

  const handleLikeToggle = (event) => {
    setLikedEvents((prev) =>
      prev.includes(event.id)
        ? prev.filter((id) => id !== event.id)
        : [...prev, event.id]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🎉 EventPal</Text>
      <Text style={styles.tagline}>Discover & Book Trending Events</Text>

      <TextInput
        placeholder="🔍 Search for events..."
        style={styles.searchBar}
        placeholderTextColor="#ccc"
      />

      <Text style={styles.sectionTitle}>✨ Upcoming Highlights</Text>

      {events.map((event) => (
        <TouchableOpacity
          key={event.id}
          style={styles.eventCard}
          onPress={() => handleEventPress(event)}
        >
          <Image source={{ uri: event.image }} style={styles.eventImage} />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventInfo}>📍 {event.location}</Text>
            <Text style={styles.eventInfo}>📅 {event.date}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.footerNote}>Stay tuned for more exciting events 🚀</Text>

      <View style={styles.navRow}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navButtonText}>👤 Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navButtonText}>⚙️ Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.navButtonText}>💬 Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.navButtonText}>ℹ️ About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 4,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    borderColor: '#444',
    borderWidth: 1,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f2f2f2',
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: '#2a2a2c',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 190,
  },
  eventDetails: {
    padding: 14,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#fff',
  },
  eventInfo: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 2,
  },
  footerNote: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 30,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2c2c2e',
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
  },
  navButton: {
    backgroundColor: '#7b2cbf',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  navButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
