import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import HomeScreen from './screens/HomeScreen';
import EventListScreen from './screens/EventListScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import BookingScreen from './screens/BookingScreen';
import PaymentScreen from './screens/PaymentScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import EventScheduleScreen from './screens/EventScheduleScreen';
import CreateEventScreen from './screens/CreateEventScreen';
import VenueMapScreen from './screens/VenueMapScreen';
import DonationsScreen from './screens/DonationsScreen';
import LiveUpdatesScreen from './screens/LiveUpdatesScreen';
import EmergencyContactScreen from './screens/EmergencyContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Events" component={EventListScreen} options={{ title: 'All Events' }} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} options={{ title: 'Event Detail' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Now' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Secure Payment' }} />
        <Stack.Screen name="MyBookings" component={MyBookingsScreen} options={{ title: 'My Bookings' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ title: 'Feedback' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About EventPal' }} />
        <Stack.Screen name="EventSchedule" component={EventScheduleScreen} options={{ title: 'Event Schedule' }} />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} options={{ title: 'Create Event' }} />
        <Stack.Screen name="VenueMap" component={VenueMapScreen} options={{ title: 'Venue Map' }} />
        <Stack.Screen name="Donations" component={DonationsScreen} options={{ title: 'Donations' }} />
        <Stack.Screen name="LiveUpdates" component={LiveUpdatesScreen} options={{ title: 'Live Updates' }} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} options={{ title: 'Emergency Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
