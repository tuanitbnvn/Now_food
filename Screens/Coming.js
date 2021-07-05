import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
 
export default function Coming() {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                       
                       <TouchableOpacity style={{height:90,width:90,borderRadius:100}}>
                           <Image style={{ height: 90, width: 90}}
                                   source={require("./image/download.png")}/>
                       </TouchableOpacity>
                       <View style={{height:150,justifyContent:'center',alignItems:'center'}}>
                           <View style={{height:30}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Quên chưa đặt món rồi nè bạn ơi?</Text>
                           </View>
                           <Text>Những đơn hàng đã được xác nhận,đang  </Text>
                           <Text>được chuẩn bị và giao đi đều sẽ được hiển thị</Text>
                           <Text>ở đây để các bạn dễ theo dõi nhé!</Text>
                       </View>
               </View>
        </View>
    )
}
const styles = StyleSheet.create({
   
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'red',
    },
    avatar:{
        
        height:500,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f6f8',

    },
})


