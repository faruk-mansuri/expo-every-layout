import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='(protected)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='(auth)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='index' options={{ headerShown: false }} />

      <Stack.Screen
        name='modal'
        options={{
          presentation: 'modal',
          gestureEnabled: true,
          contentStyle: {
            marginTop: 10,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          },
        }}
      />

      {/* screenOptions={({ navigation }) => ({
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
        presentation: 'modal',
        cardStyle: {
          marginTop: 10,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }, */}
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
