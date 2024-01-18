import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { profileStyles } from "./ProfileStyles";
import BackIcon from "../../assets/SVG/backIcon";
import EnterIcon from "../../assets/SVG/enterIcon";

const Profile = ({ children, isInitialProfile }) => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate("BottomTab");
  };

  return (
    <SafeAreaView style={profileStyles.safeAreaContainer}>
      <View style={profileStyles.pageContainer}>
        <View style={profileStyles.topContainer}>
          <View style={profileStyles.BackIconContainer}>
            <View style={profileStyles.BackIcon}>
              <TouchableOpacity onPress={handleHome}>
                <BackIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={profileStyles.text}>
            <Text style={profileStyles.profile}>Profile</Text>
          </View>
          <View style={profileStyles.BackIcon2}>
            <TouchableOpacity>
              <BackIcon />
            </TouchableOpacity>
          </View>
        </View>

        {children}

        <View style={profileStyles.bottomContainer}>
          <View style={profileStyles.guide}>
            <Text style={profileStyles.guideText}>How Qur8 Works?</Text>
            <TouchableOpacity>
              <EnterIcon style={profileStyles.enterIcon} />
            </TouchableOpacity>
          </View>
          {!isInitialProfile && (
            <TouchableOpacity>
              <Text style={profileStyles.logout}>Logout</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Text style={profileStyles.version}>Ver 0.1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
