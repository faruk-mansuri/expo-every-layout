import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const One = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Tab One</Text>

      <Button onPress={() => router.push('/two')} title='two' />
      <Button onPress={() => router.push('/')} title='landing page' />

      <Button
        onPress={() => router.push('/one/details')}
        title='Details page'
      />

      <Button onPress={() => router.replace('/login')} title='Logout' />
    </View>
  );
};

export default One;

const styles = StyleSheet.create({});
