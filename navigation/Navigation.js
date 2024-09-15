import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './screens/SplashScreen';
import HomeScreen from './HomeScreen';
// import LoginScreen from './LoginScreen';
// import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="About" component={AboutScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
