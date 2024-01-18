import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Profile from "./Profile";
import { styles as agentStyles } from "./ProfileStyles";
import HoneyIcon from "../../assets/SVG/honeyIcon";
import ShadowIcon from "../../assets/SVG/shadowIcon";
import { COLOURS } from "../constants";

const AgentProfile = () => {
  return (
    <Profile>
      <View style={styles.agentInfo}>
        <Image
          style={styles.agentProfile}
          source={require("../../assets/AgentProfile.png")}
        />
        <View style={styles.nameDetail}>
          <Text style={styles.agentName}>Anushka</Text>
          <Text style={styles.agentNumber}>7291829947</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.brandRepresent}>Brands you represent</Text>
        <Text style={styles.brandRepresentText}>
          All the brands for which you run campaigns
        </Text>
      </View>

      <View style={styles.addBrandContainer1}>
        <View style={styles.addBrandContainer}>
          <View style={styles.brandUpdate}>
            <HoneyIcon style={styles.honeyIcon} />
            <ShadowIcon style={styles.shadowIcon} />
            <Text style={styles.brandAdded}>No brands added yet!</Text>
            <Text style={styles.brandAdded}>Tap below to add your brand</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <View style={styles.primaryButton}>
                <Text style={styles.addBrandText}>+ Add a brand</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Profile>
  );
};

export default AgentProfile;

const styles = StyleSheet.create({
  agentInfo: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  agentProfile: {
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
  agentName: {
    fontWeight: "600",
    fontSize: 20,
    width: 166,
    paddingBottom: 12,
    color: COLOURS.secondary,
  },
  agentNumber: {
    paddingBottom: 6,
    fontSize: 14,
    color: COLOURS.tertiary,
  },
  middleContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  brandRepresent: {
    color: COLOURS.tertiary,
    fontWeight: "600",
    paddingBottom: 4,
  },
  brandRepresentText: {
    color: COLOURS.tertiary,
    fontWeight: "300",
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
  ...agentStyles,
});
