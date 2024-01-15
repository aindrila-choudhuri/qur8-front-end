import { EvilIcons, AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocalSvg } from "react-native-svg";

import OffersCard from "../components/Card/OffersCard";
import { Styles } from "../constants/Styles";
import data from "../json/offersData.json";

const Offers = () => {
  const todayData = data.filter((item) => item.date === "today");
  const tomorrowData = data.filter((item) => item.date === "tomorrow");

  return (
    <ImageBackground
      source={require("../../assets/gradient.png")}
      style={style.backgroundImage}
    >
      <SafeAreaView style={style.container}>
        <TouchableOpacity
          style={[style.searchContainer, Styles.searchContainer]}
        >
          <View style={style.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/search1.svg")}
              style={style.searchIconSvg}
            />
          </View>

          <View style={style.searchContent}>
            <EvilIcons name="search" size={24} style={style.icon} />
            <Text style={style.searchPlaceholder}>Search</Text>
          </View>
          <View style={style.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/offersSearch.svg")}
              style={style.searchIconSvg}
            />
          </View>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={style.scrollViewContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View style={style.headerContainer}>
              <Text style={[Styles.xxlBoldText, style.spacesTitle]}>
                Offers
              </Text>
              <TouchableOpacity style={style.upcomingButton}>
                <Text style={[Styles.mdSemiBold, style.upcomingButtonText]}>
                  Upcoming: All
                  <AntDesign name="caretdown" size={14} color="white" />
                </Text>
              </TouchableOpacity>
            </View>

            {/* Campaigns Today */}
            <View style={style.campaignContainer}>
              <Text style={[Styles.mdText, style.campaignTitle]}>
                Campaigns Today
              </Text>
              {todayData.map((item) => (
                <OffersCard key={item.id} data={item} />
              ))}
            </View>

            {/* Campaigns Tomorrow */}
            <View style={style.campaignContainer}>
              <Text style={[Styles.mdText, style.campaignTitle]}>
                Campaigns Tomorrow
              </Text>
              {tomorrowData.map((item) => (
                <OffersCard key={item.id} data={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    width: "100%",
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 8,
  },
  searchIconSvg: {
    marginLeft: 8,
    marginRight: 8,
  },
  searchContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#557184",
    paddingLeft: 6,
  },
  searchPlaceholder: {
    fontStyle: "italic",
    color: "#557184",
    fontSize: 12,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  spacesTitle: {
    fontSize: 30,
    color: "#004F84",
    marginTop: 10,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  upcomingButton: {
    backgroundColor: "#007DD0",
    borderRadius: 18,
    paddingHorizontal: 10,
  },
  upcomingButtonText: {
    color: "white",
    fontSize: 12,
  },
  campaignContainer: {
    marginTop: 10,
  },
  campaignTitle: {
    color: "#557184",
    marginTop: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default Offers;
