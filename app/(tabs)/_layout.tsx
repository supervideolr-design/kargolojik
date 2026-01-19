import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function LogoTitle() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/images/kargolojik-logo.png')}
        style={styles.headerLogo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLogo: {
    width: 200,
    height: 45,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1e88e5',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarShowLabel: false, // Hide all labels - only icons
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingVertical: 10,
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
        headerStyle: {
          backgroundColor: '#1e88e5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1e88e5',
          },
          headerTitleContainerStyle: {
            width: '100%',
            paddingHorizontal: 0,
          },
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Yardım',
          headerTitle: 'Yardım Konuları',
          tabBarIcon: ({ color }) => (
            <Feather name="help-circle" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Şube Ara',
          headerTitle: 'Şube Arama',
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
