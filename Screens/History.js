import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Datadichvu from './data/datadichvu'
import Datatrangthai from './data/datatrangthai'
export default function History() {
    const [Show,setShow]=useState(false)
    const [Shon,setShon]=useState(false)
    const [title,setTitle]=useState('Dịch vụ')
    const [status,setStatus]=useState('Tất cả')
    const ToggleModal=()=>{
        setShow(!Show)
    }
    const Tonggle=()=>{
        setShon(!Shon)
    }
    return (
        <View style={styles.container}>
            <View style={styles.shopeexu}>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:30,alignItems:'flex-end',}}>
                        <Ionicons name="logo-bitcoin" size={20} color={"#fbd01e"} />
                    </View>
                    <View  style={{width:300,justifyContent:'center'}}>
                        <Text style={{color:'#f69113',fontWeight:'bold',fontSize:14}}>Liên kết shopee để nhận thưởng khi đánh giá</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={"black"} />
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
                <View style={styles.service}>
                    <TouchableOpacity onPress={ToggleModal} style={{flexDirection:'row'}}>
                       <Text style={{marginLeft:15}}>{title}</Text>
                       <Ionicons name="chevron-down" size={12} color={"black"} />
                   </TouchableOpacity>
                   <Modal visible={Show} transparent onRequestClose={ToggleModal}>
                      <TouchableOpacity style={{flex:1}} onPress={ToggleModal}>
                        <TouchableOpacity style={{flex:0.5,backgroundColor:'#fff',top:70}}>
                            <FlatList data={Datadichvu}
                            renderItem={({item})=>{
                                return(
                                    <TouchableOpacity style={{width:'100%',height:40,borderBottomWidth:0.5,paddingLeft:15,borderBottomColor:'#d8d8d8'}} onPress={()=>setTitle(item.title)}>
                                        <Text >{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal> 
                </View>
                <View style={styles.status}>
                <TouchableOpacity onPress={Tonggle} style={{flexDirection:'row'}}>
                       <Text style={{marginLeft:15}}>{status}</Text>
                       <Ionicons name="chevron-down" size={12} color={"black"} />
                   </TouchableOpacity>
                   <Modal visible={Shon} transparent onRequestClose={Tonggle} >
                      <TouchableOpacity style={{flex:1}} onPress={Tonggle}>
                        <TouchableOpacity style={{flex:0.5,backgroundColor:'#fff',top:70}}>
                            <FlatList data={Datatrangthai}
                            renderItem={({item})=>{
                                return(
                                    <TouchableOpacity style={{width:'100%',height:40,borderBottomWidth:0.5,paddingLeft:15,borderBottomColor:'#d8d8d8'}} onPress={()=>setStatus(item.title)}>
                                        <Text >{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal> 
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.center}>
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
                            
                        </View>
                </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        //backgroundColor:'red',
    },
    shopeexu:{
        width:'100%',
        height:40,
        backgroundColor:'#fff8e4',
        justifyContent:'center'
    },
    menu:{
        width:'100%',
        height:30,
        //backgroundColor:'blue',
        flexDirection:'row'
    },
    service:{
        width:'50%',
        height:'100%',
        justifyContent:'center'
    },
    status:{
        width:'50%',
        height:'100%',
        justifyContent:'center'
    },
    line:{
        height:15,
        backgroundColor:'#f4f6f8'
    },
    center:{
        
    },
    avatar:{
        
        height:500,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f6f8',

    },
})
