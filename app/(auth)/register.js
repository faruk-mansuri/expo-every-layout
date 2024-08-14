import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Register = () => {
  return (
    <View>
      <Text>register</Text>
      <Link href={'/login'} asChild>
        <Button title='Login Page' />
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

export default Register;

const styles = StyleSheet.create({});
