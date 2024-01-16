import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BackIcon from "../../assets/SVG/backIcon";
import EnterIcon from "../../assets/SVG/enterIcon";
import HoneyIcon from "../../assets/SVG/honeyIcon";
import ShadowIcon from "../../assets/SVG/shadowIcon";
import { COLOURS } from "../constants";

const ProfileInitial = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate("BottomTab");
  };
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.topContainer}>
        <View style={styles.BackIconContainer}>
          <View style={styles.BackIcon}>
            <TouchableOpacity onPress={handleHome}>
              <BackIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.profile}>Profile</Text>
        </View>

        <View style={styles.BackIcon2}>
          <TouchableOpacity>
            <BackIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.initialProfileInfo}>
        <Image
          style={styles.initialProfile}
          source={require("../../assets/InitialProfile.png")}
        />
        <View style={styles.nameDetail}>
          <Text style={styles.initialProfileName}>
            Your/Brand name & logo will come here
          </Text>
          <Text style={styles.initialProfileNumber}>Your Phone Number</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.addBrandContainer}>
          <View style={styles.brandUpdate}>
            <HoneyIcon style={styles.honeyIcon} />
            <ShadowIcon style={styles.shadowIcon} />
            <Text style={styles.brandAdded}>You haven't signed up yet!</Text>
            <Text style={styles.brandAdded}>
              Tap below to signup and star offering ads
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <View style={styles.primaryButton}>
                <Text style={styles.addBrandText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.guide}>
          <Text style={styles.guideText}>How Qur8 Works?</Text>
          <TouchableOpacity>
            <EnterIcon style={styles.enterIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.version}>Ver 0.1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileInitial;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 8,
    height: 50,
    justifyContent: "space-between",
  },
  BackIconContainer: {
    justifyContent: "center",
  },
  BackIcon: {
    paddingLeft: 24,
    width: 32,
    height: 32,
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
  },
  profile: {
    fontWeight: "600",
    textAlign: "center",
    color: COLOURS.secondary,
  },
  BackIcon2: {
    paddingRight: 24,
    justifyContent: "center",
    opacity: 0,
  },
  initialProfileInfo: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  initialProfile: {
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
  initialProfileName: {
    fontWeight: "600",
    fontSize: 20,
    width: 166,
    paddingBottom: 12,
    color: COLOURS.secondary,
  },
  initialProfileNumber: {
    paddingBottom: 6,
    fontSize: 14,
    color: COLOURS.tertiary,
  },

  middleContainer: {
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
  bottomContainer: {
    paddingTop: 20,
    paddingHorizontal: 24,
    height: 85,
    justifyContent: "space-between",
  },
  guide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guideText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.tertiary,
  },
  enterIcon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    padding: 4,
  },
  logout: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
  version: {
    fontSize: 12,
    fontWeight: "300",
    color: COLOURS.tertiary,
  },
});
