import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView from "react-native-maps";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLOURS } from "../constants";
import ProceedIcon from "../../assets/SVG/proceedIcon";


const SearchPlacesScreen = () => {
  const [location, setLocation] = useState({
    latitude: 23.83215,
    longitude: 91.28794,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <GooglePlacesAutocomplete
        placeholder="Search Location"
        onPress={(data, details = null) => {
          const point = details?.geometry?.location;
          if (!point) return;
          setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,
          });
        }}
        query={{
          key: "AIzaSyD26fjxZNc52YBtoVHlgpxAjHH1Jq5Jw3o",
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            backgroundColor: COLOURS.gray2,
            color: COLOURS.secondary,
            fontStyle: "italic",
            fontSize: 16,
            paddingLeft: 35,
            borderRadius: 12,
            borderStyle: "solid",
          },
          textInputContainer: {
            color: "#004F84",
            padding: 8,
            backgroundColor: "#fff",
          },
        }}
      />

      <MapView showsUserLocation={true} style={styles.map} region={location} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Proceed with the selected location
          </Text>
          <View style={styles.ProceedIcon}>
            <ProceedIcon />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchPlacesScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  button: {
    flexDirection:'row',
    backgroundColor: COLOURS.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
    margin: 16,
    alignItems: "center",
    justifyContent:'center',
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  ProceedIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
  },
});
