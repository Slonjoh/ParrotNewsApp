import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';


// const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

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
            key={route.key} // Key is passed
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

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        tabBar={props => <MyTabBar {...props} />} // custom TabBar
      >
        <Tab.Screen name="News" component={HomeScreen} options={{ tabBarLabel: 'News' }} />
        <Tab.Screen name="AboutMe" component={AboutScreen} options={{ tabBarLabel: 'AboutMe' }} />
        <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
