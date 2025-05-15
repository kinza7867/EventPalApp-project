import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MainMenuScreen = () => {
  const navigation = useNavigation();

  const coreFeatures = [
    { title: 'Home', icon: 'home-outline', screen: 'Home', color: '#10b981' },
    { title: 'Profile', icon: 'person-outline', screen: 'Profile', color: '#3b82f6' },
    { title: 'Settings', icon: 'settings-outline', screen: 'Settings', color: '#f59e0b' },
    { title: 'Feedback', icon: 'chatbox-ellipses-outline', screen: 'Feedback', color: '#6366f1' },
    { title: 'About', icon: 'information-circle-outline', screen: 'About', color: '#ec4899' },
    { title: 'Booking', icon: 'calendar-outline', screen: 'Booking', color: '#ef4444' },
  ];

  const extraFeatures = [
    { title: 'Event Schedule', icon: 'time-outline', screen: 'EventSchedule', color: '#14b8a6' },
    { title: 'Create Event', icon: 'create-outline', screen: 'CreateEvent', color: '#8b5cf6' },
    { title: 'Venue Map', icon: 'map-outline', screen: 'VenueMap', color: '#f97316' },
    { title: 'Donations', icon: 'cash-outline', screen: 'Donations', color: '#22c55e' },
    { title: 'Live Updates', icon: 'megaphone-outline', screen: 'LiveUpdates', color: '#0ea5e9' },
    { title: 'Emergency Contact', icon: 'call-outline', screen: 'EmergencyContact', color: '#ef4444' },
  ];

  const renderMenuItems = (items) => (
    items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.button, { backgroundColor: item.color + 'cc' }]}
        onPress={() => navigation.navigate(item.screen)}
      >
        <Icon name={item.icon} size={24} color="#fff" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{item.title}</Text>
          <Text style={styles.descText}>{getFeatureDescription(item.title)}</Text>
        </View>
      </TouchableOpacity>
    ))
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://media.gettyimages.com/id/2156170315/photo/a-cheerful-female-party-planner-holds-a-clipboard-in-her-hands-while-looking-directly-at-the.jpg?s=612x612&w=gi&k=20&c=Ilz_FEGu2O03doHZLpvOyP2bKIP0DabkDwGwONVcGnQ=' }}
        style={styles.profileImage}
      />
      <Text style={styles.appTitle}>🎉 Kinza's EventPal</Text>
      <Text style={styles.subtitle}>Manage events like a pro!</Text>

      <Text style={styles.sectionTitle}>Core Features</Text>
      {renderMenuItems(coreFeatures)}

      <Text style={styles.sectionTitle}>Extra Features</Text>
      {renderMenuItems(extraFeatures)}
    </ScrollView>
  );
};

const getFeatureDescription = (title) => {
  switch (title) {
    case 'Event Schedule':
      return 'Check dates and times of upcoming events.';
    case 'Create Event':
      return 'Add your own event to the system.';
    case 'Venue Map':
      return 'Explore event locations on map.';
    case 'Donations':
      return 'Support with your generous donations.';
    case 'Live Updates':
      return 'Stay informed with real-time updates.';
    case 'Emergency Contact':
      return 'Quick access to emergency help.';
    case 'Home':
      return 'Go back to dashboard overview.';
    case 'Profile':
      return 'View and update your information.';
    case 'Settings':
      return 'Customize your app preferences.';
    case 'Feedback':
      return 'Share your feedback with us.';
    case 'About':
      return 'Learn more about EventPal.';
    case 'Booking':
      return 'Reserve your seat or ticket.';
    default:
      return '';
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#121212',
    alignItems: 'center',
    minHeight: '100%',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#10b981',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#ccc',
    marginBottom: 25,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#10b981',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    width: '100%',
    elevation: 3,
  },
  icon: {
    marginRight: 15,
    marginTop: 3,
  },
  textContainer: {
    flexShrink: 1,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  descText: {
    fontSize: 13,
    color: '#e0e0e0',
    marginTop: 2,
  },
});

export default MainMenuScreen;
