// screens/HistoryScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { firestore } from '../firebaseConfig';
import firebase from 'firebase/compat/app';

const HistoryScreen = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const fetchOperations = async () => {
      const user = firebase.auth().currentUser;
      const querySnapshot = await firestore.collection('operations').where('userId', '==', user.uid).get();
      const fetchedOperations = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOperations(fetchedOperations);
    };

    fetchOperations();
  }, []);

  return (
    <View>
      <Text>Historial de Operaciones</Text>
      <FlatList
        data={operations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text onPress={() => Alert.alert('Comentario', item.comment)}>
            {item.amount} - {item.comment}
          </Text>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
