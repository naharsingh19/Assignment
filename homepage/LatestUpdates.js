import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const LatestUpdates = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="star" size={24} color="#000" />
        <Text style={styles.title}>Latest updates</Text>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>2 new</Text>
        </View>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.updateItem}>
        <View style={[styles.iconContainer, { backgroundColor: "#e0e7ff" }]}>
          <FontAwesome name="bar-chart" size={24} color="#818cf8" />
        </View>
        <View style={styles.updateContent}>
          <Text style={styles.updateTitle}>Profile got a new look</Text>
          <Text style={styles.updateDescription}>
            I updated your business profile description with relevant keywords
          </Text>
        </View>
      </View>

      <View style={styles.updateItem}>
        <View style={[styles.iconContainer, { backgroundColor: "#fef3c7" }]}>
          <Ionicons name="cog" size={24} color="#fbbf24" />
        </View>
        <View style={styles.updateContent}>
          <Text style={styles.updateTitle}>Profile is much sweeter</Text>
          <Text style={styles.updateDescription}>
            I have updated your business profile description
          </Text>
        </View>
      </View>

      <View style={[styles.updateItem, styles.inactiveItem]}>
        <View style={[styles.iconContainer, { backgroundColor: "#fee2e2" }]}>
          <MaterialCommunityIcons name="chart-line" size={24} color="#f87171" />
        </View>
        <View style={styles.updateContent}>
          <Text style={[styles.updateTitle, styles.inactiveText]}>
            Website SEO bumped
          </Text>
          <Text style={[styles.updateDescription, styles.inactiveText]}>
            Your website SEO score has moved up to 85% (+24%)
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  newBadge: {
    backgroundColor: "#A4FF59",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  newBadgeText: {
    color: "#166534",
    fontSize: 12,
    fontWeight: "bold",
  },
  seeAll: {
    marginLeft: "auto",
    color: "#590D7D",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  updateItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9FBDA",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  updateContent: {
    flex: 1,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  updateDescription: {
    fontSize: 16,
    color: "#4b5563",
  },
  inactiveItem: {
    backgroundColor: "#F5F5F5",
  },
  inactiveText: {
    color: "black",
  },
});

export default LatestUpdates;
