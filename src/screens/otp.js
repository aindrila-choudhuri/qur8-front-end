import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOURS, FONT } from "../constants";

import React, {useRef, useState, useEffect}  from "react";
import { LinearGradient } from "expo-linear-gradient";
import OtpIcon from "../../assets/SVG/otpIcon";

const OtpScreen = () => {
     const et1 = useRef(); //editText
     const et2 = useRef();
     const et3 = useRef();
     const et4 = useRef();
     const et5 = useRef();
     const et6 = useRef();
     const [isPressed, setIsPressed] = useState();
     const handlePress = () => {
       setIsPressed(!isPressed);
     };
     const [count, setCount] = useState(60);
     useEffect(() => {
       const interval = setInterval(() => {
         if (count === 0) {
           clearInterval(interval);
         } else {
           setCount(count - 1);
         }
       }, 1000);
     }, [count]);
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#ffe0e3", "#F3F4F8"]}
        locations={[0, 1]}
        useAngle={true}
        angle={180}
      >
        <View style={styles.downPop}>
          <View style={styles.otpLeft}>
            <Text style={styles.HeadText}>Enter OTP</Text>
            <Text style={styles.otpIntro}>Enter OTP sent to 7291829947</Text>
          </View>
          <View style={styles.OtpIcon}>
            <OtpIcon />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <View>
          <View style={styles.otpView}>
            <TextInput
              ref={et1}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
            />
            <TextInput
              ref={et5}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et6.current.focus();
                } else if (txt.length < 1) {
                  et4.current.focus();
                }
              }}
            />
            <TextInput
              ref={et6}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(txt) => {
                if (txt.length >= 1) {
                  et6.current.focus();
                } else if (txt.length < 1) {
                  et5.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.resendText}>
            <Text style={{ fontStyle: "italic" }}>
              OTP not received? Resend in secs
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.PrimaryBtn}>
            <View
              style={[
                styles.BtnText,
                { backgroundColor: isPressed ? "#004F84" : "#007DD0" },
              ]}
            >
              <Text style={styles.proceed}>Sign In</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.footerParent}>
          <Text style={styles.textNormal}>I agree to Qur8's </Text>
          <Text style={styles.textBold}>Terms & Conditions </Text>
          <Text style={styles.textNormal}>&</Text>
          <Text style={styles.textBold}> Privacy Policy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
   
  downPop: {
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  otpLeft: {
    justifyContent: "center",
  },
  HeadText: {
    fontSize: 32,
    color: COLOURS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  otpIntro: {
    fontSize: 12,
    color: COLOURS.tertiary,
    marginTop: 8,
  },
  OtpIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    paddingTop: 24,
    paddingBottom: 36,
    paddingLeft: 12,
    paddingRight: 12,
  },
  otpView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  inputView: {
    height: 54,
    width: 47,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOURS.tertiary,
    borderStyle: "solid",
    backgroundColor: COLOURS.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 400,
  },
  resendText: {
    paddingTop: 12,
    paddingLeft: 12,
  },

  PrimaryBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 0,
    height: 60,
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

  proceed: {
    fontWeight: "600",
    color: COLOURS.white,
  },
  footerParent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  text1: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  text2: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
  textNormal: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  textBold: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
});
