import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Noti({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <View style={styles.title}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:20}}>Thông báo</Text>
               </View>
               <View style={{justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity >
                        <AntDesign name="setting" size={25} color={"black"} />
                    </TouchableOpacity>
               </View>
               
           </View>
           <View style={styles.center}>
           <View style={styles.sale}>
                  <TouchableOpacity onPress={()=>navigation.navigate("Giam gia")} style={{flexDirection:'row',height:'100%',borderBottomColor:'#f4f6f8',borderBottomWidth:1}}>
                        <View style={{justifyContent:'center',height:'100%',width:50,alignItems:'center',}}>
                            <View style={{borderRadius:150,height:45,width:45,justifyContent:'center',alignItems:'center',backgroundColor:'#f66302',marginLeft:10}}>
                                <Marterial name="tag-outline" size={30} color={"black"}  />
                                
                            </View>
                        </View>
                        <View style={{height:'100%',width:250,justifyContent:'center',marginLeft:10}}>
                            <Text style={{fontWeight:'bold'}}>Khuyến mãi</Text>
                            <Text style={{color:'#969696'}}>Bao bạn ăn chỉ 4k</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Ionicons name="chevron-forward" size={20} color={"#7f7f7f"} style={{marginLeft:20}}/>
                        </View>
                    </TouchableOpacity> 
                </View>
                <View style={styles.sale}>
                  <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomColor:'#f4f6f8',borderBottomWidth:1}}>
                        <View style={{justifyContent:'center',height:'100%',width:50,alignItems:'center',}}>
                            <View style={{borderRadius:150,height:45,width:45,justifyContent:'center',alignItems:'center',backgroundColor:'#0179ea',marginLeft:10}}>
                                <SimpleLineIcons name="volume-2" size={30} color={"black"}  />
                                
                            </View>
                        </View>
                        <View style={{height:'100%',width:250,justifyContent:'center',marginLeft:10}}>
                            <Text style={{fontWeight:'bold'}}>Tin tức</Text>
                            <Text style={{color:'#969696'}}>Thay đổi chính sách</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Ionicons name="chevron-forward" size={20} color={"#7f7f7f"} style={{marginLeft:20}}/>
                        </View>
                    </TouchableOpacity> 
                </View>
                
                
                <View style={styles.avatar}>
                        <View style={{height:50,width:'100%',backgroundColor:'#f4f6f8',}}>
                            <Text style={{marginTop:10,}}>Cập nhật đơn hàng</Text>
                        </View>
                        <TouchableOpacity style={{height:90,width:90,borderRadius:100}}>
                            <Image style={{ height: 90, width: 90}}
                                    source={require("./image/download.png")}/>
                        </TouchableOpacity>
                        <View style={{height:90,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Trải nghiệm ngay!</Text>
                            <Text>Thông tin đơn hàng được cập nhật tại đây</Text>
                        </View>
                </View>
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        flex:0.5,
       
         flexDirection:'row'
    },
    center:{
        flex:6,
        
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'92%',
    },
    sale:{
        height:75,
        width:'100%',
        //backgroundColor:'red',
        
    },
    avatar:{
        
        height:350,
        width:'100%',
        
        alignItems:'center',
        backgroundColor:'#f4f6f8',

    },
})

