import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Replace with your background color from Figma
  },
  logo: {
    width: 200, // Replace with your logo width from Figma
    height: 200, // Replace with your logo height from Figma
    resizeMode: 'contain',
  },
  statusBarBackground: {
    backgroundColor: '#000000', // Replace with your status bar color from Figma
  },
  // Add more global styles as needed
});

export default globalStyles;