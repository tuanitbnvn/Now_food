import React,{useEffect, useState} from 'react'
import { View, Text , StyleSheet,Dimensions, Image, ScrollView,TouchableOpacity, TouchableHighlight, Touchable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import History from './History'
import Draff from './Draff'
import Coming from './Coming'
const Cart = () => {
    const [SC,setScreen]=useState('Coming');
    const ToggleScreen = () => {
        if (SC) {
          if (SC == 'Coming') {
            return <Coming />;
          }
          if (SC == 'History') {
            return <History />;
          }
          if (SC == 'Draff') {
            return <Draff />;
          }
        }
      };
    //   console.log(SC)
    return (
        <View>
                 <View style={{flexDirection: 'row',paddingLeft:15,paddingRight:15,justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={() => setScreen('Coming')} style={[styles.btnscreen,{borderBottomColor:SC=='Coming'?'red':'#fff'}]}>
                    <Text style={[styles.textscreen,{color:SC=='Coming'?'red':'black'}]}>Đang đến</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setScreen('History')} style={[styles.btnscreen,{borderBottomColor:SC=='History'?'red':'#fff',}]}>
                    <Text style={styles.textscreen,{color:SC=='History'?'red':'black'}} >Lịch sử</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setScreen('Draff')} style={[styles.btnscreen,{borderBottomColor:SC=='Draff'?'red':'#fff',}]}>
                    <Text style={styles.textscreen,{color:SC=='Draff'?'red':'black'}} >Đơn nháp</Text>
                    </TouchableOpacity>
                </View>
            <ToggleScreen/>
        </View>
    )
}
export default Cart
const styles = StyleSheet.create({
    btnscreen:{
        height:40,
        //backgroundColor:'red'
        borderBottomWidth:3,   
        width:'30%',
        justifyContent:'center',
        alignItems:'center', 
    },
    textscreen:{
        fontSize:15,
       

    }
})