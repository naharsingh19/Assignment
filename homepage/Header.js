import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Bell } from "react-native-feather";
import { SvgXml } from "react-native-svg";
import profileSvg from "../assets/profile.svg";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profilePic}>
        <SvgXml xml={profileSvg} width="40" height="40" />
      </View>
      <Text style={styles.title}>Da Naturalista</Text>
      <View style={styles.notificationContainer}>
        <Bell stroke="#4B0082" width={20} height={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E6E6FA", // Light purple
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Dark purple
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
