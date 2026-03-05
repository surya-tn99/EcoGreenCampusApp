import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useAppStartup = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const initializeApp = async () => {
      // Simulate loading resources or checking authentication
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second loading time

      // Navigate to the main application screen after loading
      navigation.replace('MainApp'); // Replace 'MainApp' with your actual main screen route
    };

    initializeApp();
  }, [navigation]);
};

export default useAppStartup;