import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function SettingsScreen({ navigation }) {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button onPress={() => goToPage('Home')} title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    gap: 1,
    justifyContent: 'center',
  },
});
