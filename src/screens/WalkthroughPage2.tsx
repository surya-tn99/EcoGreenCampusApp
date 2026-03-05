import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
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

const WalkthroughPage2 = () => {
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
          navigation.replace('WalkthroughPage3');
        } else if (gestureState.dx > SWIPE_THRESHOLD) {
          navigation.replace('WalkthroughPage1');
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
          <View style={styles.leaderboardCard}>
            <View style={styles.leaderboardHeader}>
              <Text style={styles.leaderboardTitle}>LEADERBOARD</Text>
              <Text style={styles.leaderboardIcon}>🏆</Text>
            </View>

            <View style={styles.rankRow}>
              <View style={styles.rankNumber}>
                <Text style={styles.rankNumberText}>1</Text>
              </View>
              <View style={styles.rankInfo}>
                <View style={styles.barShort} />
                <View style={styles.barTiny} />
              </View>
              <Text style={styles.pointsText}>+1250</Text>
            </View>

            <View style={styles.rankRowSecondary}>
              <View style={styles.rankNumberSecondary}>
                <Text style={styles.rankNumberTextSecondary}>2</Text>
              </View>
              <View style={styles.rankInfo}>
                <View style={styles.barMedium} />
                <View style={styles.barSmall} />
              </View>
              <Text style={styles.pointsTextSecondary}>+980</Text>
            </View>

            <View style={styles.rankRowSecondary}>
              <View style={styles.rankNumberSecondary}>
                <Text style={styles.rankNumberTextSecondary}>3</Text>
              </View>
              <View style={styles.rankInfo}>
                <View style={styles.barShort} />
                <View style={styles.barTiny} />
              </View>
              <Text style={styles.pointsTextSecondary}>+840</Text>
            </View>

            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgeIcon}>🌱</Text>
                <Text style={styles.badgeText}>YOU ARE TOP 5%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Earn Eco Points</Text>
          <Text style={styles.description}>
            Get points for every sustainable activity and compete with your
            friends to become a green champion.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dotActive} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.replace('WalkthroughPage3')}
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
  leaderboardCard: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 12,
    marginBottom: 16,
  },
  leaderboardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
    letterSpacing: 1,
  },
  leaderboardIcon: {
    fontSize: 24,
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
    borderRadius: 12,
    marginBottom: 10,
  },
  rankNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2e7f32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankNumberText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  rankInfo: {
    flex: 1,
    marginLeft: 12,
  },
  barShort: {
    height: 8,
    width: 80,
    backgroundColor: 'rgba(46, 127, 50, 0.4)',
    borderRadius: 4,
    marginBottom: 4,
  },
  barTiny: {
    height: 6,
    width: 48,
    backgroundColor: 'rgba(46, 127, 50, 0.2)',
    borderRadius: 3,
  },
  pointsText: {
    color: '#2e7f32',
    fontWeight: 'bold',
    fontSize: 14,
  },
  rankRowSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(46, 127, 50, 0.2)',
  },
  rankNumberSecondary: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankNumberTextSecondary: {
    color: '#64748b',
    fontWeight: 'bold',
    fontSize: 14,
  },
  barMedium: {
    height: 8,
    width: 96,
    backgroundColor: '#94a3b8',
    borderRadius: 4,
    marginBottom: 4,
  },
  barSmall: {
    height: 6,
    width: 64,
    backgroundColor: '#cbd5e1',
    borderRadius: 3,
  },
  pointsTextSecondary: {
    color: '#64748b',
    fontWeight: 'bold',
    fontSize: 14,
  },
  badgeContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e7f32',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  badgeIcon: {
    fontSize: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
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

export default WalkthroughPage2;
