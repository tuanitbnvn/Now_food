import React, { Component, useState,useEffect } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DATA from './data/datasale'
import { useNavigation } from '@react-navigation/native';
import { getNearMe } from '../Services/API';
import {useDispatch} from 'react-redux'

export default function Nearme () {
    const dispatch=useDispatch()
    const onClick=(id)=>{
         navigation.navigate('Detail',{id:id})
         dispatch({type:'ONCLICK',data:{idShop:id}}) 
    } 
    const navigation = useNavigation();
    const [product, setProduct] = useState()
    useEffect(()=>{
        const getProduct=async()=>{
            const result=await getNearMe();
            // console.log(result)
            setProduct(result.data.reply.delivery_infos)
            // console.log(result.data.reply.delivery_infos)
        }
        getProduct();
    },[])
    const renderItem = ({ item }) => (
        // <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id:item.id})}  style={{backgroundColor:'white',width:'100%',justifyContent:'space-evenly',borderWidth:0.2,borderBottomColor:'silver'}}>
        <TouchableOpacity onPress={()=>onClick(item.id)}  style={{backgroundColor:'white',width:'100%',justifyContent:'space-evenly',borderWidth:0.2,borderBottomColor:'silver'}}>
        <View style={styles.saleof}>
            <View style={{width:100,alignItems:'center',marginTop:5}}>
            <Image style={{width:100,height:100,marginLeft:5}}
                source={{uri:item.photos?.[0].value}}
            />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'bold',width:220}} >{item.name}</Text>
                
                <View style={{flexDirection:'row',marginLeft:5,marginTop:20}}>
                    <View style={{width:'40%',flexDirection:'row'}}>
                        <Ionicons name="star" size={17} color={"yellow"} />
                        <Text>{item.rating.avg}</Text>
                    </View>
                    <View style={{width:'60%',flexDirection:'row'}}>
                        <Marterial name="clock-time-three-outline" size={17} color={"black"} />
                        <Text>22min . 2.3km</Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
      );
   
    return (
        <View>
            <FlatList
                        data={product}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        
                    />   
        </View>
    )
}
const styles = StyleSheet.create({
    saleof:{
        width:'100%',
        //backgroundColor:'silver',
        height:120,
        flexDirection:'row',
        padding:5,
    }
})
