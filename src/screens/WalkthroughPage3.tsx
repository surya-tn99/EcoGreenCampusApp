import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  WalkthroughPage1: undefined;
  WalkthroughPage2: undefined;
  WalkthroughPage3: undefined;
  LoginScreen: undefined;
  MainApp: undefined;
};

const SWIPE_THRESHOLD = 50;

const WalkthroughPage3 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 10 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -SWIPE_THRESHOLD) {
          navigation.replace('LoginScreen');
        } else if (gestureState.dx > SWIPE_THRESHOLD) {
          navigation.replace('WalkthroughPage2');
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBackground}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxDExOcujXsa00T0dzAlzOKLu0llnwW2H1b9q1206ouPAzdpdAsK1_zU1jfqrYpfNYFgf9UG9XydeZZ5FcVIdlucevjEg2KiHbWpGRfE0hoX--n7J7VOLpK6DivGshWUMGL968rLiOB0MwgdM5BXiRmSvET7jXWCsObmyQG6pTYkO0UPMmbPHoH9Zu2cA_pK3UsABi9kiFelg7JF62CzxkTHBGZZw9oIvuXMLIBPTXIfLEctErquRUdarkfoAatGg7pTedOhOvY-A',
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Build a Greener Campus</Text>
          <Text style={styles.description}>
            Join sustainability initiatives and help create a cleaner and
            greener future for everyone.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotActive} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.replace('LoginScreen')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6',
    paddingBottom: 34,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  skipButton: {
    color: '#2e7f32',
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 320,
    marginBottom: 48,
    position: 'relative',
  },
  imageBackground: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
    borderRadius: 24,
    transform: [{ scale: 0.9 }],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 320,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
  },
  dotActive: {
    width: 24,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2e7f32',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(46, 127, 50, 0.2)',
  },
  footer: {
    padding: 32,
  },
  getStartedButton: {
    backgroundColor: '#2e7f32',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#2e7f32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default WalkthroughPage3;
