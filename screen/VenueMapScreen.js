import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const VenueMapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗺 Venue Map</Text>
      <Image
        source={{ uri: 'https://www.planwallpaper.com/static/images/venue_map.jpg' }}
        style={styles.map}
        resizeMode="contain"
      />
      <Text style={styles.note}>View your event locations on the map above.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#10b981', marginBottom: 20 },
  map: { width: '100%', height: 300, borderRadius: 10 },
  note: { color: '#ccc', fontSize: 14, marginTop: 15 },
});

export default VenueMapScreen;
