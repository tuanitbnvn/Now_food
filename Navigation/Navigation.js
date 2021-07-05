import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wishlist from '../Screens/Wishlist'
import Noti from '../Screens/Noti'
import Me from '../Screens/Me'
import Sale from '../Screens/Sale'
import Cart from '../Screens/Cart'
import Productfood from '../Screens/Productfood'
import Detail from '../Screens/Detail'
import ProductDescribe from '../Component/ProductDescribe'
import  {createStackNavigator} from '@react-navigation/stack'
import Home1 from '../Screens/Home1';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home1' tabBarOptions={{
      activeTintColor:'red',
      inactiveTintColor:'grey',
    }}>
      <Tab.Screen 
            name="Trang chủ" 
            component={Home1} 
            options={{
              tabBarIcon: ({color}) =><Ionicons name="home-outline" size={28} color={color} style={{textAlign:'center',marginTop:3}}/>
            }}      />
      <Tab.Screen 
            name="Đơn hàng" 
            component={Cart} 
            options={{
              tabBarIcon: ({color}) =><Ionicons name="clipboard-outline" size={28} color={color} style={{textAlign:'center',marginTop:3}}/>
            }} />
      <Tab.Screen 
            name="Yêu thích"
            component={Wishlist} 
            options={{
              tabBarIcon: ({color}) =><Ionicons name="heart-outline" size={28} color={color} style={{textAlign:'center',marginTop:3}}/>

            }} />
      <Tab.Screen 
            name="Thông báo" 
            component={Noti} 
            options={{
              tabBarIcon: ({color}) =><Ionicons name="notifications-outline" size={28} color={color} style={{textAlign:'center',marginTop:3}}/>
            }} />
      <Tab.Screen 
            name="Tôi" 
            component={Me}
            options={{
              tabBarIcon: ({color}) =><Ionicons name="person-outline" size={28} color={color} style={{textAlign:'center',marginTop:3}}/>
            }} />
    </Tab.Navigator>
  );
}

const AppStack =()=>{
 
  return(
    <Stack.Navigator initialRouteName='MyTabs' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MyTabs' component={MyTabs} />
        <Stack.Screen name='Home1' component={Home1} />
        <Stack.Screen name='Giam gia' component={Sale} />
        <Stack.Screen name='Productfood' component={Productfood} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name="ProductDescribe" component={ProductDescribe} />
    </Stack.Navigator>
  )
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

