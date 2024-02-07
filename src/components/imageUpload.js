import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Text,
} from "react-native";

import { COLOURS } from "../constants";
const ImageUpload = ({ onImageUpload, title }) => {
  const [image, setImage] = useState();

  const pickImage = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error picking an image", error);
    }
  };

  const saveImage = async (image) => {
    try {
      setImage(image);
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.uploadedImage} />
      ) : (
        <TouchableOpacity onPress={pickImage} style={styles.SecondaryBtn}>
          <View style={styles.BtnText}>
            <Text style={styles.logoText}>{title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  SecondaryBtn: {
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 0,
  },
  BtnText: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: COLOURS.primary,
    borderWidth: 1,
    backgroundColor: COLOURS.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  logoText: {
    fontWeight: "600",
    color: COLOURS.primary,
  },

  uploadedImage: {
    marginLeft: 12,
    width: 338,
    height: 300,
    borderRadius: 12,
  },
});
export default ImageUpload;
