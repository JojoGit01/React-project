import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value, onChangeValue] = useState('')

  return (
    <View style={styles.container}>
      <Text>Bebou !!!!
        Ca va ?
      </Text>
      <Text>Tu m'aimes ? </Text>

      <TextInput
        maxLength={500}
        placeholder="Oui ou non ?"
        onChangeText={ value => onChangeValue(value)}
      />
      {console.log(value)}
      <StatusBar style="auto" />

      <FlatList style={styles.flastListStyle}>
        data={[
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
          {key: 'Bou'},
        ]}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flastListStyle: {
    backgroundColor: 'green',
    color: '#000'
  }
});
