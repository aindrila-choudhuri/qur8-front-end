import { StyleSheet, View, Text } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Hello Qur8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
