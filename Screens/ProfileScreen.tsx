// screens/ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { auth, firestore } from '../firebaseConfig';
import firebase from 'firebase/compat/app';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      const userDoc = await firestore.collection('users').doc(user.uid).get();
      setUser(userDoc.data());
    };

    const fetchAccounts = async () => {
      const accountsSnapshot = await firestore.collection('accounts').get();
      const fetchedAccounts = accountsSnapshot.docs.map(doc => doc.data());
      setAccounts(fetchedAccounts);
    };

    fetchUser();
    fetchAccounts();
  }, []);

  const logout = () => {
    auth.signOut();
    navigation.navigate('Welcome');
  };

  return (
    <View>
      <Text>Perfil</Text>
      {user && <Text>Email: {user.email}</Text>}
      <Text>Mis Productos</Text>
      <View>
        {accounts.map((account, index) => (
          <Text key={index}>{account.name}</Text>
        ))}
      </View>
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
