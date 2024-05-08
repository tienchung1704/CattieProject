import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [getPassWordVisible,setPasswordVisible] = useState(false);    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        autoCapitalize='none'

      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={getPassWordVisible ? false : true}
        autoCapitalize='none'
       
      />
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Chưa có tài khoản? Đăng ký ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;
