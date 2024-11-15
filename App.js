import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Import local images
const elephantImage = require('./assets/elephant.jpg');
const leopardImage = require('./assets/leopard.jpg');
const kingfisherImage = require('./assets/kingfisher.jpg');

const QuizApp = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const correctAnswers = { q1: 'Elephant', q2: 'Leopard', q3: 'Kingfisher' };

  const handleAnswerChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const checkAnswers = () => {
    let score = 0;
    Object.keys(answers).forEach((question) => {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    });
    Alert.alert(`You have ${score} correct answers!`);
  };

  return (
    <View style={styles.container}>
      {/* Question 1 */}
      <View style={styles.questionContainer}>
        <Image source={elephantImage} style={styles.image} />
        <Text style={styles.questionText}>What animal is this?</Text>
        <Picker
          selectedValue={answers.q1}
          onValueChange={(value) => handleAnswerChange('q1', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select an item..." value="" />
          <Picker.Item label="Elephant" value="Elephant" />
          <Picker.Item label="Rhino" value="Rhino" />
          <Picker.Item label="Lion" value="Lion" />
        </Picker>
      </View>

      {/* Question 2 */}
      <View style={styles.questionContainer}>
        <Image source={leopardImage} style={styles.image} />
        <Text style={styles.questionText}>What animal is this?</Text>
        <Picker
          selectedValue={answers.q2}
          onValueChange={(value) => handleAnswerChange('q2', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select an item..." value="" />
          <Picker.Item label="Leopard" value="Leopard" />
          <Picker.Item label="Tiger" value="Tiger" />
          <Picker.Item label="Cheetah" value="Cheetah" />
        </Picker>
      </View>

      {/* Question 3 */}
      <View style={styles.questionContainer}>
        <Image source={kingfisherImage} style={styles.image} />
        <Text style={styles.questionText}>What animal is this?</Text>
        <Picker
          selectedValue={answers.q3}
          onValueChange={(value) => handleAnswerChange('q3', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select an item..." value="" />
          <Picker.Item label="Kingfisher" value="Kingfisher" />
          <Picker.Item label="Stork" value="Stork" />
          <Picker.Item label="Parrot" value="Parrot" />
        </Picker>
      </View>

      {/* Submit Button */}
      <Button title="Submit Answers" onPress={checkAnswers} color="#007AFF" />
    </View>
  );
};

export default QuizApp;

