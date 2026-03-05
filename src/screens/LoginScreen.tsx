import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';




type RootStackParamList = {
  Splash: undefined;
  WalkthroughPage1: undefined;
  WalkthroughPage2: undefined;
  WalkthroughPage3: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainApp: undefined;
};

const SWIPE_THRESHOLD = 50;

const UserIcon = ({ color = '#2e7f32', size = 18 }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ width: size * 0.4, height: size * 0.4, borderRadius: size * 0.2, borderWidth: 2, borderColor: color, marginBottom: 1 }} />
    <View style={{ width: size * 0.8, height: size * 0.3, borderTopLeftRadius: size * 0.15, borderTopRightRadius: size * 0.15, borderWidth: 2, borderColor: color, borderBottomWidth: 0 }} />
  </View>
);

const LockIcon = ({ color = '#2e7f32', size = 18 }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ width: size * 0.5, height: size * 0.4, borderTopLeftRadius: size * 0.25, borderTopRightRadius: size * 0.25, borderWidth: 2, borderColor: color, marginBottom: -2 }} />
    <View style={{ width: size * 0.8, height: size * 0.5, borderRadius: 2, borderWidth: 2, borderColor: color }} />
  </View>
);

const EyeIcon = ({ color = '#2e7f32', size = 18 }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ width: size * 0.9, height: size * 0.5, borderRadius: size * 0.25, borderWidth: 2, borderColor: color, transform: [{ rotate: '45deg' }] }} />
    <View style={{ width: size * 0.3, height: size * 0.3, borderRadius: size * 0.15, backgroundColor: color }} />
  </View>
);

const EyeOffIcon = ({ color = '#2e7f32', size = 18 }) => (
  <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ width: size * 0.9, height: size * 0.5, borderRadius: size * 0.25, borderWidth: 2, borderColor: color, opacity: 0.5 }} />
    <View style={{ position: 'absolute', width: size, height: 2, backgroundColor: color, transform: [{ rotate: '45deg' }] }} />
  </View>
);



const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const pan = useRef(new Animated.ValueXY()).current;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 10 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          navigation.replace('WalkthroughPage3');
        }
      },
    }),
  ).current;

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('MainApp');
    }, 1500);
  };

  return (
    <Animated.View
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f1f8e9" />

      <View style={styles.backgroundShape1} />
      <View style={styles.backgroundShape2} />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🌱</Text>
          </View>
          <Text style={styles.title}>EcoCampus</Text>
          <Text style={styles.subtitle}>
            Track your green impact and build a sustainable campus
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email or Phone Number</Text>
            <View style={styles.inputWrapper}>
              <UserIcon />
              <TextInput

                style={styles.input}
                placeholder="name@campus.edu"
                placeholderTextColor="rgba(46, 127, 50, 0.4)"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Password</Text>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <LockIcon />
              <TextInput

                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="rgba(46, 127, 50, 0.4)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}

              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Logging you in...' : 'Log In'}
            </Text>
            {!isLoading && <Text style={styles.arrowIcon}>→</Text>}
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.replace('SignUpScreen')}
            >
              <Text style={styles.signupButton}>Sign Up Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.floatingIcons}>
          <Text style={styles.floatingIcon}>🍃</Text>
          <Text style={styles.floatingIcon}>♻️</Text>
          <Text style={styles.floatingIcon}>💧</Text>
        </View>
      </View>

      <View style={styles.backgroundLeaf1}>
        <Text style={styles.leafIcon}>🌿</Text>
      </View>
      <View style={styles.backgroundLeaf2}>
        <Text style={[styles.leafIcon, styles.leafIconRotated]}>🌿</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8e9',
    position: 'relative',
    paddingBottom: 34,
  },
  backgroundShape1: {
    position: 'absolute',
    width: 256,
    height: 256,
    borderRadius: 128,
    backgroundColor: '#a5d6a7',
    opacity: 0.4,
    top: -80,
    left: -80,
    zIndex: 0,
  },
  backgroundShape2: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(46, 127, 50, 0.2)',
    top: '40%',
    right: -80,
    zIndex: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 1,
  },
  topSection: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(165, 214, 167, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    fontSize: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(27, 94, 32, 0.8)',
    marginTop: 8,
    textAlign: 'center',
    maxWidth: 280,
  },
  formCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(46, 127, 50, 0.1)',
  },
  inputContainer: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1b5e20',
    marginBottom: 8,
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2e7f32',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f8e9',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#2e7f32',
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#1b5e20',
  },
  eyeIcon: {
    padding: 4,
  },
  eyeIconText: {
    fontSize: 18,
    color: '#2e7f32',
  },
  loginButton: {
    backgroundColor: '#2e7f32',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    shadowColor: '#2e7f32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
  },
  dividerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(27, 94, 32, 0.4)',
    paddingHorizontal: 16,
    textTransform: 'uppercase',
  },
  signupContainer: {
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: 'rgba(27, 94, 32, 0.6)',
    marginBottom: 8,
  },
  signupButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7f32',
  },
  floatingIcons: {
    flexDirection: 'row',
    gap: 32,
    marginTop: 32,
  },
  floatingIcon: {
    fontSize: 32,
    opacity: 0.2,
  },
  backgroundLeaf1: {
    position: 'absolute',
    bottom: -40,
    left: -40,
    opacity: 0.05,
  },
  backgroundLeaf2: {
    position: 'absolute',
    top: -40,
    right: -40,
    opacity: 0.1,
  },
  leafIcon: {
    fontSize: 200,
  },
  leafIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
});

export default LoginScreen;
