import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Details = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Details</Text>

      <Button onPress={() => router.push('/one')} title='index' />
      <Button onPress={() => router.push('/one/12')} title='12 details page' />
      <Button onPress={() => router.push('/one/1')} title='1 details page' />

      <Button
        onPress={() => router.push('/disclaimer')}
        title='Disclaimer Page'
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
