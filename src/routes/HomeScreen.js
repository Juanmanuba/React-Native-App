import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import LoginForm from '../components/LoginForm';
import Greeting from '../components/Greeting';
import ShowName from '../components/ShowName';

export default function HomeScreen({ navigation }) {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Text>Nice</Text>
      <LoginForm />
      <Greeting firstName="Dad" lastName="Nunez" />
      <Greeting lastName="Nunez" />
      <Greeting firstName="Dad" />
      <ShowName firstName="Daniela" lastName="Carfora" />
      <Button onPress={() => goToPage('Settings')} title="Settings" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
