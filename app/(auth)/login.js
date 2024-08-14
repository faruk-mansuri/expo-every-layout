import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Text>login</Text>
      <Link href={'/register'} asChild>
        <Button title='register' />
      </Link>

      <Link href={'/one'} replace asChild>
        <Button title='login' />
      </Link>

      <Link href={'/modal'} replace asChild>
        <Button title='open modal' />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
