import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Assuming you're using Expo

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccountSetupChecklist = ({ onComplete }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review & publish website",
      duration: "5 mins",
      completed: false,
      icon: "🌐",
    },
    {
      id: 2,
      title: "Review personal details",
      duration: "5 mins",
      completed: false,
      icon: "🎯",
    },
    {
      id: 3,
      title: "Sync your services",
      duration: "5 mins",
      completed: false,
      icon: "🔄",
    },
    {
      id: 4,
      title: "Complete google maps profile",
      duration: "3 mins",
      completed: false,
      icon: "📍",
    },
  ]);

  const [progress, setProgress] = useState(0);
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setProgress(completedTasks / tasks.length);

    if (completedTasks === tasks.length) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        onComplete(); // Call the onComplete callback when animation is done
      });
    }
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.header}>Getting started</Text>
      <Text style={styles.title}>Let's finish setting up your account</Text>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        <View style={[styles.progressCircle, { left: `${progress * 100}%` }]}>
          <AntDesign name="check" size={12} color="black" />
        </View>
      </View>

      {tasks.map((task, index) => (
        <View key={task.id}>
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleTask(task.id)}
          >
            <Text style={styles.taskIcon}>{task.icon}</Text>
            <View style={styles.taskTextContainer}>
              <Text
                style={[
                  styles.taskTitle,
                  task.completed && styles.completedTaskTitle,
                ]}
              >
                {task.title}
              </Text>
              <Text style={styles.taskDuration}>
                {task.completed ? "Done" : task.duration}
              </Text>
            </View>
            <View
              style={[styles.checkbox, task.completed && styles.checkedBox]}
            >
              {task.completed ? (
                <AntDesign name="check" size={16} color="#8BC34A" />
              ) : (
                <View /> // Render an empty view when task is not completed
              )}
            </View>
          </TouchableOpacity>

          {/* Render a horizontal line between tasks except for the last one */}
          {index < tasks.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </Animated.View>
  );
};

const AccountSetupChecklistWrapper = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCompleted(true);
  };

  if (isCompleted) {
    return null; // Render nothing when completed
  }

  return <AccountSetupChecklist onComplete={handleComplete} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
    marginBottom: 20,
    position: "relative",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#BEE997",
    borderRadius: 4,
  },
  progressCircle: {
    position: "absolute",
    top: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#BEE997",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  taskIcon: {
    fontSize: 36,
    marginRight: 15,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  completedTaskTitle: {
    textDecorationLine: "line-through",
  },
  taskDuration: {
    fontSize: 14,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#BEE997",
    borderColor: "#BEE997",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});

export default AccountSetupChecklistWrapper;
