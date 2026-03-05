import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import StatusBarBackground from '../components/StatusBarBackground';
import { useAppStartup } from '../hooks/useAppStartup';

const SplashScreen = () => {
  const { isLoading } = useAppStartup();

  useEffect(() => {
    if (!isLoading) {
      // Navigate to the next screen after loading
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <StatusBarBackground />
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Replace with your background color from the Figma design
  },
});

export default SplashScreen;