import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Profile from "./Profile";
import { styles as brandStyles } from "./ProfileStyles";
import { COLOURS } from "../constants";
const BrandProfile = () => {
  return (
    <Profile>
      <View style={styles.brandInfo}>
        <Image
          style={styles.brandProfile}
          source={require("../../assets/BrandProfile.png")}
        />
        <View style={styles.nameDetail}>
          <Text style={styles.brandName}>Vineyards Black Pvt. Ltd.</Text>
          <Text style={styles.brandNumber}>7291829947</Text>
        </View>
      </View>
    </Profile>
  );
};

export default BrandProfile;

const styles = StyleSheet.create({
  brandInfo: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  brandProfile: {
    borderRadius: 12,
    backgroundColor: COLOURS.lightWhite,
    shadowColor: "rgba(85, 113, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    height: 121,
  },
  nameDetail: {
    paddingLeft: 24,
    justifyContent: "flex-end",
  },

  brandName: {
    fontWeight: "600",
    fontSize: 20,
    width: 166,
    paddingBottom: 12,
    color: COLOURS.secondary,
  },

  brandNumber: {
    paddingBottom: 4,
    fontSize: 14,
    color: COLOURS.tertiary,
  },
  ...brandStyles,
});
