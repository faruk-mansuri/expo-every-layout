import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          title: 'login',
        }}
      />
      <Stack.Screen
        name='register'
        options={{
          title: 'register',
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
