import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Text, Easing } from 'react-native';
import useAppStartup from '../hooks/useAppStartup';

const SplashScreen = () => {
  useAppStartup();
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.timing(loadingAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ),
    ]).start();
  }, [scaleAnim, fadeAnim, loadingAnim]);

  const loadingScale = loadingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        <Image
          source={require('../../figma-pics/appLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.title}>EcoCampus</Text>
        <Text style={styles.brandingText}>track your green impact</Text>
      </Animated.View>



      <View style={styles.loadingContainer}>
        <Animated.View
          style={[styles.loadingBar, { transform: [{ scaleX: loadingScale }] }]}
        />
      </View>
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
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 250,
    height: 250,
  },
  textContainer: {

    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  brandingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 20,
    textTransform: 'lowercase',
  },
  tagline: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
    textAlign: 'center',
    fontStyle: 'italic',
  },


  loadingContainer: {
    position: 'absolute',
    bottom: 80,
    width: '60%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    transformOrigin: 'left',
  },
});

export default SplashScreen;
