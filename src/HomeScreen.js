import * as React from "react";
import { Text, View, StyleSheet,  TouchableOpacity, Image} from "react-native";
import { SliderBox } from "react-native-image-slider-box";


const Home = ({navigation}) =>{
    const slides =[
            require('./img/ao.jpg'),
            require('./img/cancau.jpg'),
            require('./img/giuong.jpg'),
            require('./img/nem.jpg'),
            require('./img/whiskas.jpg')
        ]
  
    return(
            <View style = {styles.container}> 
                <Text style={styles.title}>Welcome to My Store</Text>
                <Text style = {styles.in1}>We have every thing u need to deserve ur cat</Text>
            <Text style = {styles.in2}>Sản Phẩm Nổi Bật</Text>
            <View style={styles.spcontainer}>
               <SliderBox images={slides}
                autoplay
                circleLoop
                dotColor='red'
                ImageComponentStyle = {{borderRadius: 18,marginTop:10,}}
                />
            </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Product')}>
                <Text style={styles.linkText}>Go, Bắt đầu mua sắm</Text>
                </TouchableOpacity>
        
            </View>
    );
}
const styles = StyleSheet.create({
    sp:{
        borderRadius:20,
        height: 130,
        width: 130,

    },
    spcontainer:{
       borderRadius: 18,
        
    },
    container:{
        flex: 1,
        alignItems: 'left',

    },
    title:{
        fontSize: 30,
        marginBottom: 5,
        color: 'black',
        marginLeft: 5,
    },
    linkText:{
        marginTop: 10,
        marginLeft: 20,
        color: 'blue',
        textAlign: 'left',
        fontSize: 20,
    },
    in1:{
        marginLeft: 5,
        fontSize: 15,
    },
    in2:{
        marginLeft: 5,
        marginTop: 50,
        color: 'green',
        fontSize: 20,
    },
    Image:{
        
        resizeMode: 'stretch',
    },
    img1:{
        alignItems: 'center',
    }
});

export default Home;