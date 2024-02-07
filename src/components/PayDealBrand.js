import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import PayAgentIcon from "../../assets/SVG/payAgentIcon";
import ProceedIcon from "../../assets/SVG/proceedIcon";
import { COLOURS } from "../constants";

const PayDealBrand = ({ payDealVisible, setPayDealVisible }) => {
  const toggleModalPayDeal = () => {
    setPayDealVisible(!payDealVisible);
  };
  return (
    <>
      <Modal
        visible={payDealVisible}
        transparent
        swipeDirection="down"
        onBackdropPress={() => toggleModalPayDeal()}
        onSwipeComplete={() => toggleModalPayDeal()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <LinearGradient
          colors={["#e0fdff", "#fff"]}
          locations={[0, 1]}
          useAngle="true"
          angle={180}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        >
          <View style={styles.downPop}>
            <View style={styles.payDealLeft}>
              <Text style={styles.HeadText}>Almost there</Text>
              <Text style={styles.payDealIntro}>
                Pay the deal amount to book the space/time{" "}
              </Text>
            </View>
            <View style={styles.PayAgentIcon}>
              <PayAgentIcon />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.middleContainer}>
          <View style={styles.apartmentAd}>
            <Text style={styles.apartmentName}>Asset Miguara</Text>
            <Text style={styles.advertisementType}>Signage board</Text>
          </View>

          <View style={styles.dealDetails}>
            <View style={styles.dealPrice}>
              <Text style={styles.dealPriceText}>Deal Price</Text>
              <Text style={styles.dealPriceAmount}>$9000</Text>
            </View>
            <View style={styles.dealDate}>
              <Text style={styles.dealDateText}>Campaign Date</Text>
              <Text style={styles.dealDateTime}>10 Mar</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => setPayDealVisible(false)}>
            <View style={styles.PrimaryBtn}>
              <View style={styles.BtnText}>
                <Text style={styles.proceed}>Pay ₹9000 to book the deal </Text>
                <View style={styles.ProceedIcon}>
                  <ProceedIcon />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },

  downPop: {
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  payDealLeft: {
    justifyContent: "center",
  },
  HeadText: {
    fontSize: 32,
    color: COLOURS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  payDealIntro: {
    fontSize: 12,
    color: COLOURS.tertiary,
    marginTop: 8,
  },
  PayAgentIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  middleContainer: {
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
  },

  apartmentAd: {
    paddingBottom: 16,
  },
  apartmentName: {
    fontWeight: "600",
    color: COLOURS.secondary,
    fontSize: 20,
    paddingBottom: 4,
  },
  advertisementType: {
    fontSize: 14,
    color: COLOURS.tertiary,
    height: 18,
  },
  dealDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dealPriceText: {
    fontSize: 12,
    color: COLOURS.tertiary,
    paddingBottom: 4,
  },
  dealPriceAmount: {
    fontSize: 14,
    color: COLOURS.tertiary,
    fontWeight: "600",
  },
  dealDateText: {
    textAlign: "right",
    fontSize: 12,
    color: COLOURS.tertiary,
    paddingBottom: 4,
  },
  dealDateTime: {
    textAlign: "right",
    fontSize: 14,
    color: COLOURS.tertiary,
    fontWeight: "600",
  },
  bottomContainer: {
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 36,
  },
  PrimaryBtn: {
    height: 52,
    paddingBottom: 0,
  },
  BtnText: {
    borderRadius: 12,
    backgroundColor: COLOURS.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
  },
  ProceedIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
  },
  proceed: {
    fontSize: 14,
    fontWeight: "600",
    color: COLOURS.white,
  },
});
export default PayDealBrand;
