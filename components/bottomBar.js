import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function BottomBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.tabButton, { borderTopLeftRadius: 10 }]}>
        <Image
          source={require('../assets/home1.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Image
          source={require('../assets/offer2.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tabButton, { borderTopRightRadius: 10 }]}>
        <Image
          source={require('../assets/deal1.png')}
          style={styles.tabImage}
        />
        <Text style={styles.tabText}>Deals</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    elevation: 10,
    borderTopColor: 'gray',
  },
  tabButton: {
    height: '100%',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabImage: {
    height: 20,
    width: 20,
    objectFit: 'cover',
  },
  tabText: {
    color: 'rgba(85, 113, 132, 1)',
    fontWeight: 'bold',
  },
});

export default BottomBar;
