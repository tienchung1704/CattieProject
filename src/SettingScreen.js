import React  from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
    const navigation = useNavigation();
    return(
        <View>
            
            <SafeAreaView style={styles.user}>
              <Image source={require('./img/logo.jpg')} style={styles.img}></Image>
                <Text style={styles.tx2}>Hello tienchung</Text>
            </SafeAreaView>
            <Button
            onPress={()=> navigation.navigate('Cart')}
            style={styles.tx1}
            title='Your Cart'
            ></Button>
            <Button 
                onPress={()=> navigation.navigate('FeedBack')} 
                style={styles.tx1}
                title="Send Feed Back">
            </Button>
            <Button
                onPress={()=> navigation.navigate("Home")}
                style={styles.tx1}
                title="Return Home"
            
            ></Button>
            <Button
              onPress={()=> navigation.navigate('Login')}
              style={styles.tx1}
              title="Dang Xuat"
            ></Button>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 15,
        justifyContent:'center',
        marginVertical:250,
    },
    tx1:{
        backgroundColor: 'white',
        alignItems:'center',
        borderRadius: 12,
        padding: 12,
        width: 300,
        justifyContent:'center',
    },
    img:{
        width: 80,
        height: 70,
        marginBottom: 20,
        borderRadius:20,
    },
    tx2:{
        fontSize: 20,
    },
    user:{
        alignItems: 'left',
        flexDicrection: "row",
    }
});
export default SettingScreen;
