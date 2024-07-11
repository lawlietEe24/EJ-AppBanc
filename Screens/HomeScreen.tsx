// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Operaciones" onPress={() => navigation.navigate('Operation')} />
      <Button title="Historial" onPress={() => navigation.navigate('History')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
