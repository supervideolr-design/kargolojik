import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1e88e5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#f5f7fa',
            },
          }}
        >
          <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="branch/[id]" 
            options={{ 
              title: 'Şube Detayı',
              headerBackTitle: 'Geri'
            }} 
          />
          <Stack.Screen 
            name="help/[id]" 
            options={{ 
              title: 'Yardım',
              headerBackTitle: 'Geri'
            }} 
          />
          <Stack.Screen 
            name="wizard" 
            options={{ 
              title: 'Çözüm Rehberi',
              headerBackTitle: 'Geri',
              presentation: 'modal'
            }} 
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
