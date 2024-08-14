import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const modal = () => {
  const router = useRouter();

  return (
    <View>
      <Text>modal</Text>

      <Button onPress={() => router.push('/login')} title='Close Modal' />
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({});
