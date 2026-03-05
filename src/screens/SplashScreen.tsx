import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import StatusBarBackground from '../components/StatusBarBackground';
import useAppStartup from '../hooks/useAppStartup';

const SplashScreen = () => {
  useAppStartup();

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
    backgroundColor: '#4CAF50',
  },
});

export default SplashScreen;
