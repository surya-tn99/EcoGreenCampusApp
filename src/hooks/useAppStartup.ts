import { useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  MainApp: undefined;
};

const useAppStartup = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const initializeApp = async () => {
        await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));
        setIsLoading(false);
        navigation.replace('MainApp');
      };

      initializeApp();
    }, [navigation]),
  );

  return { isLoading };
};

export default useAppStartup;
