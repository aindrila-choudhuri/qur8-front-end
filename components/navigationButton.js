import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function NavigationButton() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image source={require('../assets/map.png')} style={styles.icon} />
        <View style={styles.separator} />
        <Image source={require('../assets/man.png')} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    position: 'absolute',
    bottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: '100%',
    width: 80,
    backgroundColor: '#007DD0',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    height: 20,
    width: 20,
  },
  separator: {
    height: '60%',
    width: 1,
    backgroundColor: 'white',
  },
});

export default NavigationButton;
