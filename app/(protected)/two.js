import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Two = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Tab Two</Text>

      <Button onPress={() => router.push('/one')} title='one' />
      <Button onPress={() => router.push('/')} title='landing page' />

      <Button onPress={() => router.replace('/login')} title='Logout' />
    </View>
  );
};

export default Two;

const styles = StyleSheet.create({});
