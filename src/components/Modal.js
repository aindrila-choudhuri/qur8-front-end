import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal as RNModal,
  Pressable,
  ScrollView,
} from "react-native";
import { LocalSvg } from "react-native-svg";

import { Styles } from "../constants/Styles";

const CustomModal = ({
  modalVisible,
  toggleModal,
  selectedTab,
  selectedTab1,
  type,
  changeTab,
  changeTab1,
}) => {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <View style={{ marginTop: 10 }}>
            <View style={style.dir}>
              <TouchableOpacity onPress={toggleModal}>
                <LocalSvg asset={require("../../assets/Close.svg")} />
              </TouchableOpacity>
              <Text style={[Styles.mdSemiBold, style.textheading]}>
                Filters
              </Text>
              <Text />
            </View>
            <View style={style.separator} />

            <View style={style.alignCampaignStatus}>
              <Text style={[Styles.mdText, style.subtitleHeading]}>
                Campaign Status
              </Text>
              <View style={style.tabButtonsContainer}>
                <Pressable
                  style={[
                    style.upcomingTabButtonLeft,
                    {
                      backgroundColor:
                        selectedTab === "upcoming" ? "#007DD0" : "white",
                    },
                  ]}
                  onPress={() => changeTab("upcoming")}
                >
                  <Text
                    style={{
                      color: selectedTab === "upcoming" ? "white" : "#007DD0",
                      fontSize: 10,
                    }}
                  >
                    Upcoming
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    style.archievedTabButton,
                    {
                      backgroundColor:
                        selectedTab === "archieved" ? "#007DD0" : "white",
                    },
                  ]}
                  onPress={() => changeTab("archieved")}
                >
                  <Text
                    style={{
                      color: selectedTab === "archieved" ? "white" : "#007DD0",
                      fontSize: 10,
                    }}
                  >
                    Archieved
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={style.separator} />

            {type === "offers" ? (
              <ScrollView
                style={{ width: "100%" }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View style={style.tabContainer}>
                  <Text style={[Styles.mdText, style.subtitleHeading]}>
                    Offer Acceptance
                  </Text>
                  <View style={style.tabButtonsContainer}>
                    <Pressable
                      style={[
                        style.allTabButton,
                        {
                          backgroundColor:
                            selectedTab1 === "all" ? "#007DD0" : "white",
                        },
                      ]}
                      onPress={() => changeTab1("all")}
                    >
                      <Text
                        style={{
                          color: selectedTab1 === "all" ? "white" : "#007DD0",
                          fontSize: 10,
                        }}
                      >
                        All
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        style.pendingTabButton,
                        {
                          backgroundColor:
                            selectedTab1 === "pending" ? "#007DD0" : "white",
                        },
                      ]}
                      onPress={() => changeTab1("pending")}
                    >
                      <Text
                        style={{
                          color:
                            selectedTab1 === "pending" ? "white" : "#007DD0",
                          fontSize: 10,
                        }}
                      >
                        Pending
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        style.acceptedTabButton,
                        {
                          backgroundColor:
                            selectedTab1 === "accepted" ? "#007DD0" : "white",
                        },
                      ]}
                      onPress={() => changeTab1("accepted")}
                    >
                      <Text
                        style={{
                          color:
                            selectedTab1 === "accepted" ? "white" : "#007DD0",
                          fontSize: 10,
                        }}
                      >
                        Accepted
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View style={style.separator} />
              </ScrollView>
            ) : null}
            <View style={style.clearAllContainer}>
              <Text style={[Styles.mdSemiBold, style.clearAllText]}>
                Clear All
              </Text>
              <TouchableOpacity style={style.showDealsButton}>
                <Text style={style.showDealsButtonText}>Show 12 Deals</Text>
                <LocalSvg asset={require("../../assets/leftArrow.svg")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default CustomModal;

const style = StyleSheet.create({
  dir: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textheading: {
    color: "#004F84",
    fontSize: 18,
  },
  alignCampaignStatus: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitleHeading: {
    color: "#557184",
    fontSize: 14,
    marginRight: 10,
  },
  tabButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  upcomingTabButtonLeft: {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderWidth: 1,
    borderColor: "#007DD0",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  archievedTabButton: {
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderWidth: 1,
    borderColor: "#007DD0",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  allTabButton: {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#007DD0",
    paddingVertical: 8,
  },
  pendingTabButton: {
    paddingHorizontal: 12,
    borderColor: "#007DD0",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  acceptedTabButton: {
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: "#007DD0",
    borderBottomRightRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tabContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clearAllContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  showDealsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007DD0",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 26,
  },
  showDealsButtonText: {
    color: "white",
  },
  mainContainer: {
    flex: 1,
    marginTop: 18,
    borderRadius: 20,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  clearAllText: {
    color: "#007DD0",
    fontSize: 15,
    marginTop: 20,
  },
  cardContainer: {
    padding: 16,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
    marginTop: 20,
  },
});
