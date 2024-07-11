import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App Financiera</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default WelcomeScreen;
