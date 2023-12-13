import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.leftIconContainer}>
          <Image
            source={require('../assets/qur8icon.png')}
            style={styles.leftIcon}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="search"
          placeholderTextColor={'gray'}
          cursorColor={'gray'}
        />
        <View style={styles.rightIconContainer}>
          <Image
            source={require('../assets/mesh2.png')}
            style={styles.rightIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
    position: 'absolute',
    zIndex: 2,
  },
  searchBarContainer: {
    height: 50,
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  leftIconContainer: {
    height: '100%',
    width: '20%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  leftIcon: {
    height: 45,
    width: 45,
    marginLeft: '5%',
    borderRadius: 10,
  },
  input: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'gray',
  },
  rightIconContainer: {
    height: '100%',
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  rightIcon: {
    height: 45,
    width: 45,
    position: 'absolute',
    right: '5%',
    borderRadius: 10,
  },
});

export default SearchBar;
