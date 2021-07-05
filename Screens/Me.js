import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Me() {
    return (
       <View style={styles.container}>
           <View style={styles.header}>
               <View style={styles.title}>
                    <Text style={{fontSize:16,fontWeight:'400'}}>Tôi</Text>
               </View>
           </View>
           <View style={styles.center}>
               <ScrollView>
                   <View style={styles.avatar}>
                        <TouchableOpacity style={{height:90,width:90,borderRadius:100}}>
                            <Image style={{ height: 90, width: 90}}
                                    source={require("./image/download.png")}/>
                        </TouchableOpacity>
                        <Text>anhtuanpatpham</Text>
                   </View>
                    <View style={styles.line1}></View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <Marterial name="tag-outline" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Ví Voucher</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <Marterial name="tag-outline" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:255,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Shopee Xu</Text>
                                </View>
                                
                                <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                                    <Text>0 xu</Text>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} />
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <Ionicons name="card-outline" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Thanh toán</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <SimpleLineIcons name="location-pin" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Địa chỉ</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <FontAwesome name="user-o" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Mời bạn bè</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <SimpleLineIcons name="question" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Trung tâm trợ giúp</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <Marterial name="store" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Ứng dụng cho chủ quán</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    < View style={styles.line2}></View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <SimpleLineIcons name="question" size={18} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Chính sách quy định</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <AntDesign name="setting" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Cài đặt</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.notifications}>
                        <View style={{width:'95%',height:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',height:'100%',borderBottomWidth:1,borderColor:'#f5f6f9',width:'95%'}}>
                                <View style={{height:'100%',width:30,justifyContent:'center'}}>
                                    <Marterial name="information-outline" size={20} color={"black"} />
                                </View>
                                <View style={{height:'100%',width:260,justifyContent:'center',}}>
                                    <Text style={{fontSize:15}}>Về Now</Text>
                                </View>
                                <View style={{justifyContent:'center'}}>
                                    <Ionicons name="chevron-forward" size={27} color={"black"} style={{marginLeft:20}}/>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.signout}>
                        <View style={{height:35,width:'95%'}}>
                            <TouchableOpacity style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius:50,borderWidth:1,borderColor:'red'}}>
                                <Text style={{color:'red'}}>Đăng xuất</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'100%',height:80,backgroundColor:'#f5f6f9',justifyContent:'center',alignItems:'center'}}>
                        <Text>Phiên bản 4.38.4</Text>
                        <Text>Foody Corporation</Text>
                    </View>
               </ScrollView>
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
        //backgroundColor:'red'
    },
    center:{
        flex:6,
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    avatar:{
        
        height:150,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'

    },
    line1:{
        height:15,
        backgroundColor:'#f5f6f9'
    },
    line2:{
        height:25,
        backgroundColor:'#f5f6f9',
        
    },
    notifications:{
        height:50,
        width:'100%',
    },
    signout:{
        height:80,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f6f9',
    }
})
