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

const WalkthroughPage1 = () => {
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
          <View style={styles.imagePlaceholder}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWE34J9xNmu2TrCM0ubsBzKDRz95ShhOeDsVBQNe2TPoRg9rxTzWZi55IJpCym9rgJfapHE2bizxVNP--YT_SAatiJCpwOoPg7j1evkYdi56skEpg_yuggRO2ZCnFxhBKuOSCetO7-8u58Xw4QfyZlMAj1ua23h6E5PP1906P2Prb1kSt9LxaWAwghZ5JtAFbDCXihhsUixkcoJqCIsOU32BKm63TTwoNuXSnzT_ID_JlJ3TqBXp82zhg7woagAnb7EhyVnVq_93A',
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Track Sustainability Activities</Text>
          <Text style={styles.description}>
            Record eco-friendly actions like recycling, saving energy, and
            planting trees across your campus.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.replace('WalkthroughPage2')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
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
    fontWeight: '600',
    fontSize: 16,
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
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
  },
  imageIcon: {
    fontSize: 120,
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
  nextButton: {
    backgroundColor: '#2e7f32',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default WalkthroughPage1;
