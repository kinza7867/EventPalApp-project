import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const FeedbackScreen = () => {
  // Input field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  // Static feedbacks (old feedbacks)
  const staticFeedbacks = [
    {
      id: 1,
      name: 'Ali Khan',
      email: 'ali@example.com',
      message: 'Great app, really helpful for finding events!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      email: 'sara@example.com',
      message: 'Nice UI and easy to use. Would recommend!',
      rating: 4,
    },
  ];

  // New feedbacks (submitted via form)
  const [feedbacks, setFeedbacks] = useState([]);

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !message || rating === 0) {
      Alert.alert('Error', 'Please fill out all fields and give a rating.');
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      email,
      message,
      rating,
    };

    // Add new feedback to the top of the list
    setFeedbacks([newFeedback, ...feedbacks]);

    Alert.alert('Thank You!', 'Your feedback has been submitted.');

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setRating(0);
  };

  // Render star rating
  const renderStars = (value, setValue) => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map(i => (
          <TouchableOpacity key={i} onPress={() => setValue(i)}>
            <Text style={[styles.star, i <= value ? styles.filledStar : styles.emptyStar]}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Render a feedback card
  const renderFeedbackCard = fb => (
    <View key={fb.id} style={styles.feedbackCard}>
      <Text style={styles.fbName}>{fb.name}</Text>
      <Text style={styles.fbEmail}>{fb.email}</Text>
      <Text style={styles.fbStars}>{"★".repeat(fb.rating)}</Text>
      <Text style={styles.fbMsg}>{fb.message}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>We Value Your Feedback</Text>

        {/* Feedback Form */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, styles.messageBox]}
          placeholder="Your Feedback"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <Text style={styles.label}>Rate Us</Text>
        {renderStars(rating, setRating)}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>

        {/* Display feedbacks */}
        <Text style={styles.sectionTitle}>User Feedback</Text>

        {/* Show static (old) feedbacks */}
        {staticFeedbacks.map(renderFeedbackCard)}

        {/* Show new feedbacks */}
        {feedbacks.map(renderFeedbackCard)}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef3f9',
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  messageBox: {
    height: 120,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 6,
    color: '#333',
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 28,
    marginHorizontal: 4,
  },
  filledStar: {
    color: '#f1c40f',
  },
  emptyStar: {
    color: '#ccc',
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 12,
    color: '#222',
  },
  feedbackCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  fbName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  fbEmail: {
    fontSize: 14,
    color: '#777',
  },
  fbStars: {
    color: '#f1c40f',
    marginVertical: 4,
  },
  fbMsg: {
    fontSize: 15,
    color: '#444',
  },
});

export default FeedbackScreen;
