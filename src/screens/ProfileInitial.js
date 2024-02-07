import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Profile from "./Profile";
import { styles as initialProfileStyles } from "./ProfileStyles";
import HoneyIcon from "../../assets/SVG/honeyIcon";
import ShadowIcon from "../../assets/SVG/shadowIcon";
import { COLOURS } from "../constants";

const ProfileInitial = () => {
  return (
    <Profile isInitialProfile>
      <View style={styles.InitialProfileInfo}>
        <Image
          style={styles.InitialProfileProfile}
          source={require("../../assets/InitialProfile.png")}
        />
        <View style={styles.nameDetail}>
          <Text style={styles.InitialProfileName}>
            Your/Brand name & logo will come here
          </Text>
          <Text style={styles.InitialProfileNumber}>Your Phone Number</Text>
        </View>
      </View>

      <View style={styles.addBrandContainer1}>
        <View style={styles.addBrandContainer}>
          <View style={styles.brandUpdate}>
            <HoneyIcon style={styles.honeyIcon} />
            <ShadowIcon style={styles.shadowIcon} />
            <Text style={styles.brandAdded}>You haven’t signed up yet! </Text>
            <Text style={styles.brandAdded}>
              Tap below to signup and start offering ads.
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <View style={styles.primaryButton}>
                <Text style={styles.addBrandText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Profile>
  );
};

export default ProfileInitial;

const styles = StyleSheet.create({
  InitialProfileInfo: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  InitialProfileProfile: {
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
  InitialProfileName: {
    fontWeight: "600",
    fontSize: 20,
    width: 166,
    paddingBottom: 12,
    color: COLOURS.secondary,
  },
  InitialProfileNumber: {
    paddingBottom: 6,
    fontSize: 14,
    color: COLOURS.tertiary,
  },
  addBrandContainer1: {
    paddingHorizontal: 24,
  },
  addBrandContainer: {
    backgroundColor: COLOURS.background,
    borderStyle: "solid",
    borderColor: "#67c2ff",
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "space-between",
    paddingTop: 24,
    paddingBottom: 42,
  },
  brandUpdate: {
    alignItems: "center",
  },
  honeyIcon: {
    marginBottom: 16,
  },
  shadowIcon: {
    marginBottom: 24,
  },
  brandAdded: {
    textAlign: "center",
    color: COLOURS.tertiary,
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    paddingTop: 16,
  },
  primaryButton: {
    backgroundColor: COLOURS.primary,
    borderRadius: 12,
    alignItems: "center",
    height: 42,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  addBrandText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  ...initialProfileStyles,
});
