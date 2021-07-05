import React, { Component, useEffect, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rate from './Rate'
import Nearme from './Nearme'
import Selling from './Selling'
import Fastdelivery from './Fastdelivery'
import { getNearMe } from '../Services/API';
const Productfood = ({route,navigation}) => {
 
   const {id}=route.params
   console.log('check:',id)
    const [SC,setScreen]=useState('Nearme');
    const ToggleScreen = () => {
        if (SC) {
          if (SC == 'Nearme') {
            return <Nearme />;
          }
          if (SC == 'Selling') {
            return <Selling />;
          }
          if (SC == 'Rate') {
            return <Rate />;
          }
          if (SC == 'Fastdelivery') {
            return <Fastdelivery />;
          }
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View  style={{width:40,height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons name="chevron-back" size={27} color={"black"} />
                    </View>
                </TouchableOpacity>
                <View style={{width:'80%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:17}}>Cơm</Text>
                </View>
            </View>
            <View style={styles.content}>
                    <View style={{flexDirection: 'row',paddingLeft:15,paddingRight:15,justifyContent:'space-around'}}>
                            <TouchableOpacity onPress={() => setScreen('Nearme')} style={[styles.btnscreen,{borderBottomColor:SC=='Nearme'?'red':'#fff'}]}>
                            <Text style={[styles.textscreen,{fontWeight:SC=='Nearme'?'bold':'500'}]}>Gần tôi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setScreen('Selling')} style={[styles.btnscreen,{borderBottomColor:SC=='Selling'?'red':'#fff',}]}>
                            <Text style={[styles.textscreen,{fontWeight:SC=='Selling'?'bold':'500'}]}>Bán chạy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setScreen('Rate')} style={[styles.btnscreen,{borderBottomColor:SC=='Rate'?'red':'#fff',}]}>
                            <Text style={[styles.textscreen,{fontWeight:SC=='Rate'?'bold':'500'}]}>Đánh giá</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setScreen('Fastdelivery')} style={[styles.btnscreen,{borderBottomColor:SC=='Fastdelivery'?'red':'#fff',}]}>
                            <Text style={[styles.textscreen,{fontWeight:SC=='Fastdelivery'?'bold':'500'}]} >Giao nhanh</Text>
                            </TouchableOpacity>
                    </View>
                <ToggleScreen/>
            </View>
        </View>
    )
}

export default Productfood

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:0.5,
        flexDirection:'row',
        
    },
    content:{
        flex:6,
       // backgroundColor:'blue'
    },
    btnscreen:{
        height:40,
        //backgroundColor:'red'
        borderBottomWidth:3,   
        width:'25%',
        justifyContent:'center',
        alignItems:'center', 
    },
    textscreen:{
        fontSize:15,
    }
})
