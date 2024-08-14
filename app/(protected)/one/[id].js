import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const SingleDetailsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>SingleDetailsPage</Text>
      <Text>Id : {id}</Text>
    </View>
  );
};

export default SingleDetailsPage;

const styles = StyleSheet.create({});
