import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(prev => !prev);
  const toggleDarkMode = () => setDarkModeEnabled(prev => !prev);

  const handleChangePassword = () => {
    Alert.alert(
      'Change Password',
      'You’ll be redirected to the password reset page to update your credentials.'
    );
  };

  const handleLanguageChange = () => {
    Alert.alert(
      'Language Options',
      'Choose your preferred language for the EventPal app. (Feature coming soon!)'
    );
  };

  const handlePrivacyPolicy = () => {
    Alert.alert(
      'Privacy Policy',
      'Redirecting to EventPal’s Privacy Policy webpage...'
    );
  };

  const handleFeedback = () => {
    Alert.alert(
      'Give Feedback',
      'Share your experience or suggest improvements. We value your input!'
    );
  };

  const handleHelp = () => {
    Alert.alert(
      'Help & Support',
      'Need assistance? Contact us at support@eventpal.com'
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'About EventPal',
      'EventPal v1.0.0\nYour all-in-one solution for discovering and managing events.\nDeveloped by Kinza Ali.'
    );
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have successfully logged out of EventPal.');
  };

  const styles = getStyles(darkModeEnabled);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Preferences */}
      <Text style={styles.sectionHeader}>Preferences</Text>
      <View style={styles.settingItem}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      {/* Account */}
      <Text style={styles.sectionHeader}>Account</Text>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLanguageChange}>
        <Text style={styles.buttonText}>Language Options</Text>
      </TouchableOpacity>

      {/* Legal and Support */}
      <Text style={styles.sectionHeader}>Support & Legal</Text>
      <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFeedback}>
        <Text style={styles.buttonText}>Give Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHelp}>
        <Text style={styles.buttonText}>Help & Support</Text>
      </TouchableOpacity>

      {/* About */}
      <Text style={styles.sectionHeader}>About</Text>
      <TouchableOpacity style={styles.button} onPress={handleAbout}>
        <Text style={styles.buttonText}>About EventPal</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getStyles = (darkMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#121212' : '#f4f8fc',
      padding: 20,
      flex: 1,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: darkMode ? '#fff' : '#222',
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 25,
      marginBottom: 10,
      color: darkMode ? '#aaa' : '#444',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
      padding: 14,
      backgroundColor: darkMode ? '#1e1e1e' : '#fff',
      borderRadius: 10,
      elevation: 2,
    },
    label: {
      fontSize: 16,
      color: darkMode ? '#eee' : '#333',
    },
    button: {
      backgroundColor: darkMode ? '#444' : '#3478f6',
      paddingVertical: 14,
      borderRadius: 8,
      marginTop: 12,
      alignItems: 'center',
    },
    logout: {
      backgroundColor: '#d9534f',
      marginBottom: 30,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default SettingsScreen;
