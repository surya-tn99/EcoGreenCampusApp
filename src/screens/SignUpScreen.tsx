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
  ScrollView,
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
  SignUpScreen: undefined;
  MainApp: undefined;
};

const SWIPE_THRESHOLD = 50;

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const pan = useRef(new Animated.ValueXY()).current;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          navigation.replace('LoginScreen');
        }
      },
    }),
  ).current;

  const handleSignUp = () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => navigation.replace('MainApp') },
    ]);
  };

  return (
    <Animated.View
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.logoIcon}>🌿</Text>
            <Text style={styles.title}>EcoCampus 🍃</Text>
          </View>

          {/* <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKLeaNRc5Gsn_FfWXd1oJWUiJHKYZIooBYC8ylAt3aAil34SuTgVSuGXl3xzpH4AY6j6cGX_zb9NEqC8fMgM57chwetNypRRuNmQEmw7LAMYEdJq_4Z3qs4JdFXWLvj1IeuWXDMqZf52D33BL3b7c-Q_ROO-to5LSx3jTkBwnmA_qioibqab2ToWPe2w3UfXyTJp9xI8d9AyJqgroK7hu3Fxda0UyYzrEgQPks7ox3YLiEYcQTvcGt3vxyTvPYXP2SEl409BceQGE',
              }}
              style={styles.image}
              resizeMode="contain"
            />
          </View> */}

          <View style={styles.textContainer}>
            <Text style={styles.heading}>Join the movement</Text>
            <Text style={styles.subheading}>
              Join the movement for a greener campus
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>👤</Text>
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor="#94a3b8"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>✉️</Text>
                <TextInput
                  style={styles.input}
                  placeholder="name@university.edu"
                  placeholderTextColor="#94a3b8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>📞</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+1 (555) 000-0000"
                  placeholderTextColor="#94a3b8"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#94a3b8"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>🔐</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#94a3b8"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpButtonText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.googleIcon}>🔵</Text>
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              By creating an account you agree to our{'\n'}
              <Text style={styles.termsLink}>Terms & Privacy Policy</Text>
            </Text>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  logoIcon: {
    fontSize: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    maxWidth: 400,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: 'rgba(46, 127, 50, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: '#64748b',
  },
  formCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(46, 127, 50, 0.1)',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 12,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1e293b',
  },
  signUpButton: {
    backgroundColor: '#2e7f32',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#2e7f32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#94a3b8',
    paddingHorizontal: 16,
    letterSpacing: 2,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 10,
  },
  googleIcon: {
    fontSize: 18,
  },
  googleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  termsText: {
    fontSize: 10,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 16,
  },
  termsLink: {
    color: '#2e7f32',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 4,
  },
  loginText: {
    fontSize: 14,
    color: '#64748b',
  },
  loginLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7f32',
  },
});

export default SignUpScreen;
