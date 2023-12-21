import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import OtpIcon from "../../assets/SVG/otpIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Otp = () => {
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
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
  }, [count]);
  return (
    <SafeAreaProvider>
      <LinearGradient colors={["#ffe0e3", "#fff"]} useAngle={true} angle={180}>
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
              OTP not received? Resend in {count} sec
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
    </SafeAreaProvider>
  );
};

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
    color: COLORS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  otpIntro: {
    fontSize: 12,
    color: COLORS.tertiary,
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
    width: "100",
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
    borderColor: COLORS.tertiary,
    borderStyle: "solid",
    backgroundColor: COLORS.white,
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
  },
  BtnText: {
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
  },

  proceed: {
    fontWeight: "600",
    color: COLORS.white,
  },
  footerParent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  text1: {
    fontSize: 12,
    color: COLORS.tertiary,
  },
  text2: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.primary,
  },
  textNormal: {
    fontSize: 12,
    color: COLORS.tertiary,
  },
  textBold: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.primary,
  },
});
export default Otp;
