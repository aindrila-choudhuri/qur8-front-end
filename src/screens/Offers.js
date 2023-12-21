import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Offers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Offers</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default Offers;
