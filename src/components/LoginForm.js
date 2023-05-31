import { View, Text, Button, TextInput } from 'react-native';
import React from 'react';

export default function LoginForm() {
  return (
    <View>
      <Text>LoginForm Component</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Send" onPress={() => console.log('Enviado')} />
    </View>
  );
}
