import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App banner */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
        }}
        style={styles.bannerImage}
      />

      {/* App Name */}
      <Text style={styles.title}>About EventPal</Text>

      {/* App Description */}
      <Text style={styles.description}>
        EventPal is your intelligent assistant for discovering, booking, and experiencing live events near you. Whether you're into tech meetups, music concerts, cultural festivals, or educational seminars — EventPal has it all in one place.
      </Text>

      {/* Features Section */}
      <Text style={styles.subHeading}>Key Features</Text>
      <View style={styles.featureBox}>
        <Text style={styles.bulletPoint}>• Discover events based on category, location, and interest</Text>
        <Text style={styles.bulletPoint}>• Book tickets securely with real-time availability</Text>
        <Text style={styles.bulletPoint}>• Get alerts and reminders for upcoming events</Text>
        <Text style={styles.bulletPoint}>• Rate events and leave feedback</Text>
        <Text style={styles.bulletPoint}>• Bookmark favorite events for later</Text>
        <Text style={styles.bulletPoint}>• Simple, clean UI optimized for performance</Text>
      </View>

      {/* Mission Section */}
      <Text style={styles.subHeading}>Our Mission</Text>
      <Text style={styles.description}>
        EventPal was built to simplify the process of finding meaningful events. No more switching between different apps or websites — EventPal centralizes the experience, helping people connect with communities, artists, speakers, and causes they care about.
      </Text>

      {/* Developer Profile */}
      <Text style={styles.subHeading}>Developed By</Text>
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/d2/60/47/d2604720118bc617a5fd9e1bb9bdb875.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Kinza Ali</Text>
        <Text style={styles.role}>Final Year Computer Science Student</Text>
        <Text style={styles.role}>Mobile App Developer | UI Enthusiast</Text>
      </View>

      {/* Contact Section */}
      <Text style={styles.subHeading}>Contact & Feedback</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('mailto:kinzaali.dev@gmail.com')}
        style={styles.contactButton}
      >
        <Text style={styles.contactText}>✉️ Email: kinzaali.dev@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://linkedin.com')}
        style={styles.contactButton}
      >
        <Text style={styles.contactText}>🔗 LinkedIn Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://instagram.com')}
        style={styles.contactButton}
      >
        <Text style={styles.contactText}>📷 Instagram</Text>
      </TouchableOpacity>

      {/* App Version */}
      <Text style={styles.version}>App Version 1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2a2a2a',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  featureBox: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  role: {
    fontSize: 14,
    color: '#555',
  },
  contactButton: {
    backgroundColor: '#3478f6',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
  },
  contactText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  version: {
    marginTop: 30,
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
  },
});

export default AboutScreen;
