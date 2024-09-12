import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Users, Zap, FileText, Menu } from "react-native-feather";

import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar} from "react-native";
import Header from "./homepage/Header";
import Stats from "./homepage/Stats";
import NextActionsCarousel from "./homepage/NextActionsCarousel";
import LatestUpdates from "./homepage/LatestUpdates";
import AccountSetupChecklistWrapper from "./homepage/Account";


const TodayScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar
      backgroundColor="#EECDFF" 
      barStyle="dark-content" 
    />
    <View style={styles.screen}>
      <Header />
      <ScrollView>
        <Stats />
        <AccountSetupChecklistWrapper />
        <NextActionsCarousel />
        <LatestUpdates />
      </ScrollView>
    </View>
  </SafeAreaView>
);

const LeadsScreen = () => (
  <View style={styles.screen}>
    <Text>Leads Screen</Text>
  </View>
);

const CampaignsScreen = () => (
  <View style={styles.screen}>
    <Text>Campaigns Screen</Text>
  </View>
);

const ContentScreen = () => (
  <View style={styles.screen}>
    <Text>Content Screen</Text>
  </View>
);

const MenuScreen = () => (
  <View style={styles.screen}>
    <Text>Menu Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;
          switch (route.name) {
            case "Today":
              IconComponent = Home;
              break;
            case "Leads":
              IconComponent = Users;
              break;
            case "Campaigns":
              IconComponent = Zap;
              break;
            case "Content":
              IconComponent = FileText;
              break;
            case "Menu":
              IconComponent = Menu;
              break;
            default:
              return null;
          }
          return <IconComponent stroke={color} width={size} height={size} />;
        },
        tabBarActiveTintColor: "#590D7D",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // Hide the default header
      })}
    >
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Leads" component={LeadsScreen} />
      <Tab.Screen name="Campaigns" component={CampaignsScreen} />
      <Tab.Screen name="Content" component={ContentScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;