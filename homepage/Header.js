import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const profileImage = require("../assets/profile.jpg");
const bellIcon = require("../assets/bell.jpg");

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profilePic}>
        <Image source={bellIcon} style={styles.profileImage} />
      </View>
      <Text style={styles.title}>Da Naturalista</Text>
      <View style={styles.profilePic}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#EECDFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    //bottom: 30,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden", 
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default Header;
