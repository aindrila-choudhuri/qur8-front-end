import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { Styles } from "../../constants/Styles";

const DealCard = ({ data, type }) => {
  const textStyle = Styles.mdSemiBold;
  const navigation = useNavigation();

  return (
    <Pressable
      style={localStyles.mainContainer}
      onPress={() =>
        type === "dealsDetails" ? null : navigation.navigate("DealsDetails")
      }
    >
      <View style={localStyles.cardContainer}>
        <Text style={[textStyle, localStyles.titleText]}>{data.title}</Text>
        <View style={localStyles.infoRow}>
          <Text style={localStyles.infoText}>{data.info}</Text>
        </View>
        <View style={localStyles.separator} />
        <View style={localStyles.priceRow}>
          <View style={localStyles.priceColumn}>
            <Text style={localStyles.dealText}>Deal Price</Text>
            <Text style={localStyles.price}>₹{data.price}</Text>
          </View>
          <View style={localStyles.CampaignColumn}>
            <Text style={localStyles.CampaignLabel}>Campaign Date</Text>
            <Text style={localStyles.CampaignDate}>{data.date}</Text>
          </View>
        </View>
        {type === "dealsDetails" && (
          <View style={localStyles.buttonContainer}>
            <TouchableOpacity style={localStyles.chatButton}>
              <Text style={localStyles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.invoiceButton}>
              <Text style={localStyles.invoiceButtonText}>Invoice</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginTop: 18,
    borderRadius: 12,
  },
  cardContainer: {
    padding: 16,
  },
  titleText: {
    color: "#004F84",
    fontSize: 19,
  },
  mdSemiBold: {
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 2,
  },
  infoText: {
    color: "#557184",
    fontSize: 14,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceColumn: {
    flexDirection: "column",
  },
  dealText: {
    fontSize: 14,
    fontWeight: "200",
    color: "#557184",
  },
  price: {
    fontSize: 14,
    fontWeight: "900",
    color: "#557184",
  },
  CampaignColumn: {
    flexDirection: "column",
    color: "#557184",
    fontSize: 12,
  },
  CampaignLabel: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: "200",
  },
  CampaignDate: {
    fontSize: 14,
    fontWeight: "400",
    color: "#557184",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  chatButton: {
    borderColor: "#007DD0",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 20,
  },
  chatButtonText: {
    ...Styles.mdSemiBold,
    color: "#007DD0",
    fontSize: 12,
    marginBottom: 2,
  },
  invoiceButton: {
    backgroundColor: "#007DD0",
    borderRadius: 18,
    paddingHorizontal: 20,
  },
  invoiceButtonText: {
    ...Styles.mdSemiBold,
    color: "white",
    fontSize: 12,
    marginBottom: 2,
  },
});

export default DealCard;
