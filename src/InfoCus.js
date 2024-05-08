import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InfoCus = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [soDT, setSoDT] = useState('');
    const [sanPham, setSanPham] = useState('');
    const [feebBack1, setFeedBack1] = useState('');
  
    const handleSave = () => {
      console.log('Name:', name);
      console.log('Address:', address);
      console.log('Cart Items:', cartItems);
      console.log('Feed Back:',feebBack1);
      console.log('So Dien Thoai',soDT);
      console.log('Loai San Pham',sanPham);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.tex1}>Nhap Lai Thong tin va phan hoi cua ban</Text>
        <TextInput
          placeholder="Họ và tên"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Địa chỉ"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}>
          </TextInput>
        <TextInput
          placeholder="So Dien Thoai"
          value={soDT}
          onChangeText={(text)=> setSoDT(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Loai San Pham"
          value={sanPham}
          onChangeText={(text)=>setSanPham}
          style={styles.input}
          ></TextInput>
        <TextInput
          placeholder="....."
          value={feebBack1}
          onChangeText={(text) => setFeedBack1(text)}
          style={styles.input}></TextInput>
        <Button title="Send" onPress={handleSave} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      padding: 8,
      width: '100%',
    },
    tex1:{
      alignItems: 'left',
      fontSize: 15,
      marginBottom: 15,
    },
  });

export default InfoCus;