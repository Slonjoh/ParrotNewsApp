import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { registerUser } from '../database';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    registerUser(
      email,
      password,
      () => {
        Alert.alert('Success', 'Registered successfully!');
        navigation.navigate('Login');
      },
      (error) => {
        Alert.alert('Error', 'Failed to register. Please try again.');
      }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Signup to Parrot News</Text>

      <TextInput
        placeholder="Enter your email"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <MaterialCommunityIcons
          name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: 10,
            top: 15,
          }}
        />
      </View>

      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="Confirm your password"
          secureTextEntry={!showConfirmPassword}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <MaterialCommunityIcons
          name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{
            position: 'absolute',
            right: 10,
            top: 15,
          }}
        />
      </View>

      <Button title="Signup" onPress={handleSignup} />

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'blue' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;