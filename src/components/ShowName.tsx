//ts example


import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  firstName?: string, //Propiedad opcional
  lastName: string,
}

export default function ShowName({firstName, lastName}:Props) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'black'}}>
        Hola, me llamo: {firstName} {lastName} 
      </Text>
    </View>
  )
}