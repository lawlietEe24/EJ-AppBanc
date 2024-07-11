import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebaseConfig';// Asegúrate de importar tu configuración de Firebase para la base de datos
import { db } from '../firebaseConfig';
const OperationScreen = () => {
  const [monto, setMonto] = useState('');
  const [tipoOperacion, setTipoOperacion] = useState('');
  const [comentario, setComentario] = useState('');

  const handleGuardarOperacion = () => {
    // Validar monto y tipo de operación
    if (parseFloat(monto) < 5) {
      Alert.alert(
        'Monto bajo',
        '¿Estás seguro de que el monto ingresado es correcto?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Aceptar', onPress: guardarOperacion },
        ],
        { cancelable: false }
      );
    } else if (parseFloat(monto) > 500) {
      Alert.alert('Operación no permitida', 'No se permiten transacciones mayores a $500.');
    } else {
      guardarOperacion();
    }
  };

  const guardarOperacion = async () => {
  try {
    const user = auth.currentUser;
    const operacion = {
      monto: parseFloat(monto),
      tipoOperacion,
      comentario,
      timestamp: new Date().toISOString(),
      userId: user.uid, // Asigna el ID del usuario si es relevante para tu aplicación
    };

    await firestore.collection('operaciones').add(operacion);

    Alert.alert('Operación exitosa', 'La operación se ha registrado correctamente.');
  } catch (error) {
    Alert.alert('Error', 'No se pudo guardar la operación. Por favor, inténtalo de nuevo.');
    console.error('Error al guardar operación:', error);
  }
};

  return (
    <View style={styles.container}>
      <Text>Operación</Text>
      <TextInput
        placeholder="Monto"
        value={monto}
        onChangeText={(text) => setMonto(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Tipo de operación (Depósito/Retiro)"
        value={tipoOperacion}
        onChangeText={(text) => setTipoOperacion(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Comentario"
        value={comentario}
        onChangeText={(text) => setComentario(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleGuardarOperacion} style={styles.button}>
        <Text style={styles.buttonText}>Guardar Operación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OperationScreen;
