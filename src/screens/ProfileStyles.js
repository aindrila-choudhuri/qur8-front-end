import { StyleSheet } from "react-native";

import { COLOURS } from "../constants";

export const profileStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  bottomContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  guide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
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
    paddingBottom: 40,
  },
  version: {
    fontSize: 12,
    fontWeight: "300",
    color: COLOURS.tertiary,
  },
});
