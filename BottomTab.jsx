import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLable: false ,
    tabBarHideOnKeyboard: true,
    headerShow: false,
    tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70
    }
}
const MyTab = () => {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) =>{
                    return <>
                    </>
                }
            }}
            />
            <Tab.Screen name="Cart" comp onent={CartScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
}
export default MyTab;