// import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
// import React from "react";
// import { COLORS, FONT } from "../../constants";
// import { useFonts } from "expo-font";
// import { LinearGradient } from "expo-linear-gradient";
// import OtpIcon from "../../assets/SVG/otpIcon";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// const Otp = () => {
//   return (
//     <SafeAreaProvider>
//       <LinearGradient colors={["#ffe0e3", "#fff"]} useAngle={true} angle={180}>
//         <View style={styles.downPop}>
//           <View style={styles.otpLeft}>
//             <Text style={styles.HeadText}>Enter OTP</Text>
//             <Text style={styles.otpIntro}>Enter OTP sent to 7291829947</Text>
//           </View>
//           <View style={styles.OtpIcon}>
//             <OtpIcon />
//           </View>
//         </View>
//       </LinearGradient>
//       <View style={styles.bottomContainer}>
//         <View>
//           <View style={styles.otpLayoutParent}>
//             <View style={styles.otpLayout} />
//             <View style={styles.otpLayout} />
//             <View style={styles.otpLayout} />
//             <View style={styles.otpLayout} />
//             <View style={styles.otpLayout} />
//             <View style={styles.otpLayout} />
//           </View>
//           <View style={styles.resendText}>
//             <Text>OTP not received? Resend in 00:58 sec</Text>
//           </View>
//         </View>
//         <View style={styles.PrimaryBtn}>
//           <View style={styles.BtnText}>
//             <Text style={styles.proceed}>Sign In</Text>
//           </View>
//         </View>
//         <View style={styles.footerParent}>
//           <Text style={styles.text1}>I agree to Qur8's </Text>
//           <Text style={styles.text2}>Terms & Conditions </Text>
//           <Text style={styles.text3}>&</Text>
//           <Text style={styles.text4}> Privacy Policy</Text>
//         </View>
//       </View>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   downPop: {
//     flexDirection: "row",
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//     paddingTop: 16,
//     paddingLeft: 24,
//     paddingRight: 24,
//   },
//   otpLeft: {
//     justifyContent: "center",
//   },
//   HeadText: {
//     fontSize: 32,
//     color: COLORS.primary,
//     textAlign: "left",
//     alignSelf: "stretch",
//     fontWeight: "bold",
//   },
//   otpIntro: {
//     fontSize: 12,
//     color: COLORS.tertiary,
//     marginTop: 8,
//   },
//   OtpIcon: {
//     flex: 1,
//     alignItems: "flex-end",
//   },
//   bottomContainer: {
//     paddingTop: 24,
//     paddingBottom: 36,
//     paddingLeft: 12,
//     paddingRight: 12,
//   },
//   otpLayoutParent: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//   },
//   otpLayout: {
//     height: 54,
//     width: 47,
//     borderWidth: 1,
//     borderColor: COLORS.tertiary,
//     borderStyle: "solid",
//     backgroundColor: COLORS.white,
//     borderRadius: 12,
//     overflow: "hidden",
//   },
//   resendText: {
//     paddingTop: 12,
//     paddingLeft: 12,
//   },

//   PrimaryBtn: {
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 16,
//     paddingBottom: 0,
//   },
//   BtnText: {
//     borderRadius: 12,
//     backgroundColor: COLORS.primary,
//     flex: 1,
//     height: 52,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     flexDirection: "row",
//   },

//   proceed: {
//     fontWeight: "600",
//     color: COLORS.white,
//   },
//   footerParent: {
//     flex: 1,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 16,
//   },
//   text1: {
//     fontSize: 12,
//     color: COLORS.tertiary,
//   },
//   text2: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: COLORS.primary,
//   },
//   text3: {
//     fontSize: 12,
//     color: COLORS.tertiary,
//   },
//   text4: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: COLORS.primary,
//   },
// });
// export default Otp;
