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
import Navigation from '../Navigation/Navigation';


export default function Sale({navigation}) {

    const renderItem = ({ item }) => (
        <View style={styles.saleof}>
            <View style={{width:60,alignItems:'center',marginTop:5}}>
            <Image style={{width:40,height:40}}
                source={item.photo}
            />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                <Text>{item.content1}</Text>
                <Text>{item.content2}</Text>
                <Text>{item.datetime}</Text>
            </View>
        </View>
      );
   
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{justifyContent:'center',}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Thông báo")} >
                    <Ionicons name="chevron-back" size={27} color={"black"} style={{marginLeft:10}}/>
                    </TouchableOpacity>
               </View>
               <View style={styles.title}>
                    <Text style={{fontSize:19,fontWeight:'800'}}>Thông báo</Text>
               </View>
               
           </View>
           <View style={styles.center}>
                <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        
                    />                               
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
        marginLeft:100,
        height:'100%',
        width:'95%',
    },
    saleof:{
        width:'100%',
        //backgroundColor:'red',
        height:120,
        flexDirection:'row'
    }
})
