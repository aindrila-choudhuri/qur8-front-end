import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  IBMPlexSerif_100Thin,
  IBMPlexSerif_200ExtraLight,
  IBMPlexSerif_300Light,
  IBMPlexSerif_400Regular,
  IBMPlexSerif_500Medium,
  IBMPlexSerif_600SemiBold,
  IBMPlexSerif_700Bold,
} from '@expo-google-fonts/ibm-plex-serif';
import StackNavigator from './src/Navigators/StackNavigator';
import Navigator from './src/Navigators/Navigator';
import { Provider } from "react-redux";
import { store } from "./src/redux/store.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    IBMPlexSerif_100Thin,
    IBMPlexSerif_200ExtraLight,
    IBMPlexSerif_300Light,
    IBMPlexSerif_400Regular,
    IBMPlexSerif_500Medium,
    IBMPlexSerif_600SemiBold,
    IBMPlexSerif_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Provider store={store}>
        <Navigator />
        
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
