import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Check, ChevronUp } from "react-native-feather";

const Stats = () => {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    // Example: Progress starts from 0 and increases to 40%
    const timer = setTimeout(() => setProgress(40), 1000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.leftText}>
          Rank top 3 for{"\n"}
          <Text style={styles.boldPurple}>"facials"</Text>
        </Text>
        <Text style={styles.rightText}>
          Rank on Google{"\n"}
          <Text style={styles.boldBlack}>#67 </Text>
          <ChevronUp color="#32626A" width={16} height={16} />
          <Text style={styles.greenText}>2</Text>
        </Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]}>
            {progress > 30 && (
              <View style={styles.checkmarkContainer}>
                <Check color="black" width={10} height={10} />
              </View>
            )}
          </View>
        </View>
        <Text style={styles.goalText}>#1</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Profile clicks</Text>
          <View style={styles.statValueContainer}>
            <Text style={styles.statValue}>450 </Text>
            <ChevronUp color="#BEE997" width={14} height={14} />
            <Text style={styles.statIncrease}>65</Text>
          </View>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Website visits</Text>
          <View style={styles.statValueContainer}>
            <Text style={styles.statValue}>67 </Text>
            <ChevronUp color="#BEE997" width={14} height={14} />
            <Text style={styles.statIncrease}>12</Text>
          </View>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Leads</Text>
          <View style={styles.statValueContainer}>
            <Text style={styles.statValue}>7 </Text>
            <ChevronUp color="#BEE997" width={14} height={14} />
            <Text style={styles.statIncrease}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EECDFF",
    padding: 24,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    top: -10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  leftText: {
    fontSize: 16,
    color: "#590D7D",
  },
  boldPurple: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#590D7D",
  },
  rightText: {
    fontSize: 16,
    textAlign: "right",
    color: "#590D7D",
  },
  boldBlack: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  greenText: {
    color: "#32626A",
    fontWeight: "bold",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 10,
    overflow: "visible",
  },
  progress: {
    height: "100%",
    backgroundColor: "#BEE997",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  checkmarkContainer: {
    position: "absolute",
    right: 0,
    top: -5, 
    backgroundColor: "#BEE997",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  goalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#32626A",
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#590D7D",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  statValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  statIncrease: {
    color: "#BEE997",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Stats;
