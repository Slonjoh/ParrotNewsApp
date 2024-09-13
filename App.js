import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LottieAnimation from './components/LottieAnimation';


const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app starts
  }, []);

  return (
    <View style={styles.container}>
      <LottieAnimation 
        onAnimationFinish={() => {
          // Handle animation finish, navigate to the home screen
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

