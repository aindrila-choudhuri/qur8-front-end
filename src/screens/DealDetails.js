import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocalSvg } from "react-native-svg";

import DealCard from "../components/Card/DealCard";
import { Styles } from "../constants/Styles";

const DealDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LocalSvg asset={require("../../assets/Back.svg")} />
        </Pressable>
        <Text style={[Styles.mdSemiBold, styles.headerText]}>Deal Details</Text>
        <Text />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <DealCard
          type="dealsDetails"
          data={{
            title: "Asset Miguara",
            info: "Signage board",
            price: 90000,
            date: "10 Mar",
          }}
        />

        <LocalSvg asset={require("../../assets/invoice.svg")} />

        <TouchableOpacity style={styles.downloadInvoiceButton}>
          <LocalSvg asset={require("../../assets/Download.svg")} />
          <Text style={[Styles.mdSemiBold, styles.downloadInvoiceText]}>
            Download Invoice
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    color: "#007DD0",
  },
  scrollView: {
    flex: 1,
  },
  downloadInvoiceButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  downloadInvoiceText: {
    color: "#007DD0",
    fontSize: 12,
    marginBottom: 2,
  },
});

export default DealDetails;
