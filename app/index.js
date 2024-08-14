import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Landing Page</Text>

      <Link href={'/register'} asChild>
        <Button title='register' />
      </Link>

      <Link href={'/one'} replace asChild>
        <Button title='login' />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
