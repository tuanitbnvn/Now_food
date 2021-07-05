import React, { Component, useState,useEffect } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Comment from '../Component/Comment'
import Order from '../Component/Order'
import Infomation from '../Component/Infomation'
import datacollection from '../Screens/data/datacolection'
import { getNearMe } from '../Services/API';
import {useSelector,useDispatch} from 'react-redux'
const Detail = ({navigation,route}) => {
    const data=useSelector(store=>store.Shop)
    console.log('ccc',data.idShop)
     const dispatch = useDispatch();
    const [shop,setShop]=useState()
    useEffect(()=>{
        const getShop=async()=>{
            const result=await getNearMe();
            setShop(result.data.reply.delivery_infos)
            //console.log(result.data.reply.delivery_infos)
        }
        getShop()
    },[])
    const {id, service_type}=route.params
    console.log('check:',id, service_type)
    useEffect(()=>{
        
    })
    const [SC,setScreen]=useState('Order');
    const ToggleScreen = () => {
        if (SC) {
          if (SC == 'Order') {
            return <Order idShop={id} />;
          }
          if (SC == 'Comment') {
            return <Comment />;
          }
          if (SC == 'Infomation') {
            return <Infomation />;
          }
        }
      };
    return (
        
        <View style={styles.container}>
            
            
           <FlatList
           data={shop}
           renderItem={({item})=>{
               if(item.id==id)
               return(
                   <View>
                        <ImageBackground 
                source={{uri:item.photos?.[10].value}}
                style={styles.imgbackground}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}>
                    <Ionicons 
                        name="chevron-back-outline"
                        color={'#fff'}
                        size={40}
                        style={{marginTop:10}}    
                    />  
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}>
                        <Ionicons 
                            name="search"
                            color={'#fff'}
                            size={35}
                            style={{marginTop:10,marginRight:15}}    
                        />  
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => color}
                        activeOpacity={0.7}>
                        <Ionicons 
                            name="heart-outline"
                            color={'#fff'}
                            size={35}
                            style={{marginTop:10,marginRight:15}}    
                        />  
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}>
                        <Ionicons 
                            name="ellipsis-horizontal-outline"
                            color={'#fff'}
                            size={35}
                            style={{marginTop:10,marginRight:15}}    
                        />  
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{
                    borderBottomWidth: 15,
                    paddingBottom: 9,
                    borderBottomColor: '#F5F6F8',
                  }} >
                <Text 
                    style={styles.title}>{item.name}
                </Text>
                <View style={{flexDirection:'row',marginLeft:10}}>
                    < Ionicons 
                        name='star'
                        color={'#FEC629'}
                        size={15}
                        style={{top: 9}}
                        />
                    <Text style={styles.textrate}>{item.rating.avg}</Text>
                    <Entypo
                      name="dot-single"
                      size={15}
                      color="#000"
                      style={{top: 7, left: 4, right: 4}}
                    />
                    <Text style={styles.textrate}>5.8km</Text>
                </View>
            </View>
            <View style={styles.content}>
                    <View style={{flexDirection: 'row',width:'70%',justifyContent:'space-around'}}>
                            <TouchableOpacity 
                                    onPress={() => setScreen('Order')} 
                                    style={[styles.btnscreen,
                                    ]}>
                                <Text 
                                style={[styles.textscreen,
                                    {fontWeight:SC=='Order'?'bold':'500',
                                    borderBottomColor:
                                            SC == 'Order' ? '#EE3231' : '#fff',}
                                ]}>Đặt món</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    onPress={() => setScreen('Comment')} 
                                    style={[styles.btnscreen]}>
                                <Text 
                                    style={[styles.textscreen,
                                    {fontWeight:SC=='Comment'?'bold':'500',
                                    borderBottomColor:
                                    SC == 'Comment' ? '#EE3231' : '#fff'}
                                    ]}>Bình luận</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    onPress={() => setScreen('Infomation')}
                                    style={[styles.btnscreen]}>
                                <Text 
                                    style={[styles.textscreen,
                                    {fontWeight:SC=='Infomation'?'bold':'500',
                                    borderBottomColor:
                                    SC == 'Infomation' ? '#EE3231' : '#fff'}]}>Đánh giá</Text>
                            </TouchableOpacity>
                            
                    </View>
               
            </View>
                    </View>
               )
           }}
           ListFooterComponent={()=>{
               return(
                <ToggleScreen/>
               )
           }}
           />
           
            
        
        </View>
      
    )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'red',
    },
    imgbackground: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        width:'95%',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:12,
        marginTop:10
    },
    textrate:{
        fontSize:16,
        marginLeft:6,
        marginTop:5
    },
    textscreen: {
        fontSize: 17,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 2,
    },
    saleof:{
        width:'100%',
        //backgroundColor:'silver',
        height:120,
        flexDirection:'row',
        padding:5,
    }
})
