import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; 

const ActionCard = ({ title, icon, timeLeft, actionText }) => {
  const [remainingTime, setRemainingTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} hrs left`;
    } else {
      return `${minutes} mins left`;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.timeContainer}>
        <AntDesign name="clockcircleo" size={14} color="#fff" />
        <Text style={styles.timeText}>{formatTime(remainingTime)}</Text>
      </View>
      <View style={styles.iconRow}>
        <Image source={icon} style={styles.icon} />
        <TouchableOpacity style={styles.dragHandle}>
          <Feather name="chevron-up" size={20} color="black" />
          <Feather name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>{actionText}</Text>
        <AntDesign name="arrowright" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const NextActionsCarousel = () => {
  const actions = [
    {
      id: 1,
      title: "Upload 5 photos of    'facials'",
      icon: require("../assets/bell.jpg"),
      timeLeft: 22200,
      actionText: "Upload now",
    },
    {
      id: 2,
      title: "Write a description for 'facial treatment'",
      icon: require("../assets/bell.jpg"),
      timeLeft: 3000,
      actionText: "Start writing",
    },
    {
      id: 3,
      title: "Set pricing for 'express facial'",
      icon: require("../assets/bell.jpg"),
      timeLeft: 7200,
      actionText: "Set price",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Here is what to do next</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {actions.map((action) => (
          <ActionCard key={action.id} {...action} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  seeAllText: {
    color: "#590D7D",
    fontWeight: "600",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 300,
    marginRight: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#590D7D",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#590D7D",
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 22,
    borderRadius: 10,
    top: -27,
  },
  timeText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "600",
    fontSize: 14,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    transform: [{ rotate: "10deg" }],
  },
  dragHandle: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "#590D7D",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#A4FF59",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  actionButtonText: {
    fontWeight: "600",
    marginRight: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default NextActionsCarousel;
