import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalDropdown from 'react-native-modal-dropdown';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { CLIEngine } from 'eslint';
import Datadichvu from '../Screens/data/datadichvu'
export default function Wishlist() {
    const [Show,setShow]=useState(false)
    const [title,setTitle]=useState('Danh mục')
    const ToggleModal=()=>{
        setShow(!Show)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <View style={styles.title}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Đã lưu</Text>
               </View>
           </View>
            <View style={styles.center}>
                <View style={styles.menubar}>
                    {/* <ModalDropdown options={['A', 'option 2']}
                    style={{width:80}} textStyle={{fontSize:18}} dropdownTextStyle={{fontSize:18}}>
                    </ModalDropdown> */}
                   <TouchableOpacity onPress={ToggleModal}>
                       <Text style={{marginLeft:15}}>{title}</Text>
                   </TouchableOpacity>
                   <Modal visible={Show} transparent onRequestClose={ToggleModal}>
                      <TouchableOpacity style={{flex:1}} onPress={ToggleModal}>
                        <TouchableOpacity style={{flex:0.5,backgroundColor:'#fff',top:70}}>
                            <FlatList data={Datadichvu}
                            renderItem={({item})=>{
                                return(
                                    <TouchableOpacity style={{width:'100%',height:40,borderBottomWidth:0.5,paddingLeft:15,borderBottomColor:'#d8d8d8'}} onPress={()=>setTitle(item.title)}>
                                        <Text>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal> 
                    
                </View>
                <View style={styles.avatar}>
                       
                        <TouchableOpacity style={{height:90,width:90,borderRadius:100}}>
                            <Image style={{ height: 90, width: 90}}
                                    source={require("./image/download.png")}/>
                        </TouchableOpacity>
                        <View style={{height:90,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Thả tim vào quán bạn yêu nào!</Text>
                            <Text>Hãy lấp đầy dạ dày bằng một trái tim xinh. </Text>
                            <Text> Thả tim(icon) để lưu lại quán ngon bạn thích nhé</Text>
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
        flex:0.35,
        //backgroundColor:'red',
    },
    center:{
        flex:6,
        //backgroundColor:'red',
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    menubar:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        
        height:500,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f6f8',

    },
})
