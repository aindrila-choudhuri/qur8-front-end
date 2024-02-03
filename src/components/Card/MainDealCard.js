import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Styles } from "../../constants/Styles";

const MainDealCard = () => {
  return (
    <LinearGradient
      colors={["#004F84", "#00558F", "#004F84"]}
      style={localStyles.mainContainer}
    >
      <View style={localStyles.cardContainer}>
        <Text style={[Styles.lgBoldText, localStyles.amountText]}>
          ₹ 18760{" "}
          <Text style={localStyles.amountDetailText}>spent to reach </Text>
          645{" "}
          <Text style={localStyles.amountDetailText}>
            homes till now, from 01 March 2023, Thursday
          </Text>
        </Text>
        <View style={localStyles.separator} />
        <Text style={[Styles.lgBoldText, localStyles.amountText]}>
          4500{" "}
          <Text style={localStyles.amountDetailText}>
            homes, yet to be reached
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default MainDealCard;

const localStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 18,
    borderRadius: 20,
  },
  cardContainer: {
    padding: 16,
  },
  amountText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 8,
  },
  amountDetailText: {
    ...Styles.mdText,
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
    paddingLeft: 2,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
});
