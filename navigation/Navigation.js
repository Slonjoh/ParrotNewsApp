import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// Custom Tab Bar Component
const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined 
          ? options.tabBarLabel 
          : options.title !== undefined 
          ? options.title 
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key} // Key to filter out children with same id
            onPress={onPress}
            style={{
              flex: 1,
              paddingVertical: 25, // larger clickable area
              borderBottomWidth: isFocused ? 2 : 0, 
              borderBottomColor: 'blue',
            }}
          >
            <Text
              style={{
                color: isFocused ? 'blue' : 'black',
                textAlign: 'center',
                fontSize: 18,
                marginBottom: -18,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Stack Navigator for Login and Signup
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        tabBar={props => <MyTabBar {...props} />} // Custom TabBar
      >
        <Tab.Screen name="News" component={HomeScreen} options={{ tabBarLabel: 'News' }} />
        <Tab.Screen name="AboutMe" component={AboutScreen} options={{ tabBarLabel: 'AboutMe' }} />
        {/*<Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }} />*/}
        <Tab.Screen name="Auth" component={AuthStack} options={{ tabBarLabel: 'Login' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
