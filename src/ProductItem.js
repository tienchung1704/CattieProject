import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const ProductItem = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.detail}>{product.detail}</Text>
      <TouchableOpacity style={styles.addbt}>
        <Ionicons name="add-circle" size={22} color='black'></Ionicons>
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addbt:{
    marginLeft: 260,
  },
  linkText:{
    marginTop: 7,
    color: 'blue',
},
  img2:{
    aspectRatio: 1,
    resizeMode: 'cover',
  },
mota:{
  fontSize: 13.5,
  color: 'blue',
 
},
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#7cf5bb',
    width: 300,
    height: 120,
    marginEnd: 30,
    marginBottom:10,
    borderRadius: 15,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,

  },
  price: {
    color: 'red',
    marginTop: 4,
    fontSize: 15,
    marginLeft: 10,

  },
  detail:{
    color: 'black',
    fontSize: 13,
    marginLeft: 10,
    marginTop: 5,
  },
  img:{
    flex:1,
    width: 40,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    overflow:"hidden",
    backgroundColor: 'gray',
  }

});

export default ProductItem;
    