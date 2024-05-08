import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterScreen from './src/Register';
import Home from './src/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Login';
import SettingScreen from './src/SettingScreen';
import InfoCus from './src/InfoCus';
import ShoppingCartScreen from './src/ShoppingCartScreen';
import ProductScreen from './src/ProductScreen';
import Details from './src/Details';

const Drawer= createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Login" component={LoginScreen}>
       <Drawer.Screen name = "Login" component={LoginScreen}/>
       <Drawer.Screen name = "Register" component={RegisterScreen}/> 
       <Drawer.Screen name = "Home" component={Home}/>
       <Drawer.Screen name = "Product" component={ProductScreen}/>
       <Drawer.Screen name = "Details" component={Details}/>
       <Drawer.Screen name = "Cart" component={ShoppingCartScreen}/>
       <Drawer.Screen name = "FeedBack" component={InfoCus}/>
       <Drawer.Screen name = "Setting" component={SettingScreen}/>
     </Drawer.Navigator>
     </NavigationContainer>
  );
}

