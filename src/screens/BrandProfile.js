import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BackIcon from "../../assets/SVG/backIcon";
import EnterIcon from "../../assets/SVG/enterIcon";
import ProfilePic from "../../assets/SVG/profilePic";
import { COLOURS } from "../constants";

const BrandProfile = () => {
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
      <View style={styles.brandInfo}>
        <ProfilePic />
        <View style={styles.nameDetail}>
          <Text style={styles.brandName}>Vineyards Black Pvt. Ltd.</Text>
          <Text style={styles.brandNumber}>7291829947</Text>
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
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.version}>Ver 0.1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BrandProfile;

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
  brandInfo: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
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
  bottomContainer: {
    paddingHorizontal: 24,
    height: 141,
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
