import * as React from 'react';
import { ScrollView, Text, StyleSheet,TouchableOpacity, Image, View } from 'react-native';

function Details(){
  return (
    <View>
    <ScrollView>
      <Text style={styles.text1}>Product name: Whiskas</Text>
      
      <Text style={styles.price1}>Price: $10</Text>
      <Image style={styles.i123} source={require('./img/whiskas.jpg')}></Image>
      <Text style={styles.noidung}>Thuc an dang hat danh cho meo con tren 1 nam tuoi</Text>
    </ScrollView>
    <TouchableOpacity style={styles.btnAdd}>
      <Text style={styles.tx1}>Them vao gio hang</Text>
    </TouchableOpacity>
    </View>
  );
};
 export default Details;
const styles = StyleSheet.create({
  container: {
    width:40,
    height:40,
    marginTop:5
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginLeft:'10%',
    marginTop:'5%'
  },
  price1:{
    marginTop: 10,
    fontSize:15,
    paddingLeft: 40,
    color: 'red',
  },
  noidung:{
    fontSize:20,
    marginTop:20,
    flex:1,
    fontSize: 15,
    paddingLeft: 20,
  },
  btnAdd:{
    backgroundColor:'blue',
    width:'50%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginLeft:'25%',
    marginVertical:250,
    marginTop:30,
  },
  i123:{
    width:300,
    height:300,
    marginLeft: 35,
    marginTop:50,
}  ,
tx1:{
  color:'#FFF',
  fontSize:15,
  fontWeight:'bold'
},
text8:{
  marginTop: 2,
  fontSize:18,
  paddingLeft: 37,
}
});