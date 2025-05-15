import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    title: 'Welcome to EventPal 🎉',
    text: 'Your ultimate guide to finding and attending amazing events.',
    image: {
      uri: 'https://images.sharefaith.com/images/3/1640874116834_6/1640874116834_62.jpg',
    },
    backgroundColor: '#edeaff',
  },
  {
    key: 'two',
    title: 'Explore Events Near You 📍',
    text: 'Search by category, location, or popularity. Never miss a fun day!',
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkDvcKUWS5s34VSzPWWR0zLORTS91nhymL65M2YlABcaNL71ICcZhlSOf4iQEWfdRJCY&usqp=CAU',
    },
    backgroundColor: '#f0e6ff',
  },
  {
    key: 'three',
    title: 'Book Instantly 🎟️',
    text: 'Grab your tickets in seconds and enjoy unforgettable moments.',
    image: {
      uri: 'https://i0.wp.com/blog.planningpod.com/wp-content/uploads/2020/09/Event-Booking-Tips-Best-Practices.jpg?fit=1200%2C600&ssl=1',
    },
    backgroundColor: '#f7f0ff',
  },
];

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = React.useState(false);
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Register'));
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const onDone = () => {
    setShowRealApp(true);
  };

  return showRealApp ? (
    <View style={styles.finalScreen}>
      <Text style={styles.mainTitle}>🎊 EventPal</Text>
      <Text style={styles.mainSubtitle}>Where Every Event Begins ✨</Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showSkipButton
        onSkip={onDone}
        activeDotStyle={{ backgroundColor: '#9d4edd' }}
      />
      <TouchableOpacity style={styles.skipButton} onPress={onDone}>
        <Text style={styles.skipButtonText}>Skip to App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 320,
    height: 200,
    marginVertical: 80,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    color: '#6a0dad',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  finalScreen: {
    flex: 1,
    backgroundColor: '#fff0f6',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 36,
    color: '#6f2dbd',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainSubtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#9d4edd',
    paddingVertical: 14,
    width: width * 0.75,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 6,
  },
  buttonSecondary: {
    backgroundColor: '#ff69b4',
    paddingVertical: 14,
    width: width * 0.75,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#9d4edd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
