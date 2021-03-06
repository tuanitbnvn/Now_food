import React, { Component, useEffect, useState } from 'react';
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
import Data from '../Screens/data/datasale'
import Infomation from '../Component/Infomation'
import {useNavigation} from '@react-navigation/native';
import { getShop } from '../Services/API';

const Order = props => {
    const idShop = props.idShop;
    const navigation = useNavigation();
     //console.log('idshop', idShop);
    const [shopData, setShopData] = useState();
    useEffect(()=>{
        const getApiShop = async () =>{
            const result = await getShop(idShop);
             setShopData(result.data.reply.menu_infos);
            console.log(result);
        };
        getApiShop();
    },[]); 

    const renderItem = ({ item }) => (  
        <View>
             <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#676767'}}>
                  {item.dish_type_name}
            </Text>
           <View>
            {
                item.dishes.map(e=>{
                    return(
                <TouchableOpacity onPress={()=>navigation.navigate('ProductDescribe',{idShop:idShop,idProduct:e.id,dish_type_id:item.dish_type_id})}
                        style={{ flexDirection: 'row',
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        height: 150,
                        backgroundColor:'white'}}>
           
                <Image style={{width:100,height:100,marginLeft:5,marginTop: 15}}
                    source={{uri:e.photos?.[0].value}}
                />
                <View style={{left:15, width: '65%',marginTop: 15}}>
                    <Text style={{fontSize: 18}}>{e.name}</Text>
                    <Text
                          style={{
                            fontSize: 14,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          Kh??ch h??ng vui l??ng ghi ch?? th...
                    </Text>
                    <Text
                          style={{
                            fontSize: 14,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          999+ ???? b??n | {e.total_like} ???? th??ch
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{
                                marginTop:7,
                                fontSize:16,
                                fontWeight:'bold'
                            }}
                            >{e.price.text}</Text>
                            <Text style={{
                                marginTop:7,
                                fontSize:16,
                                fontWeight:'bold',
                                marginLeft:10,
                                textDecorationLine:'line-through',
                                color:'#9B9B9B'
                            }}>
                               {e.price.discount}
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons
                              name="add-circle"
                              size={30}
                              color="#EA3534"
                            />
                          </TouchableOpacity>
                    </View>
                    
                </View>
            
            </TouchableOpacity> 
                    )
                })
            }
               
           </View>
            {/* <Text style={{fontSize: 18, fontWeight: 'bold', color: '#676767'}}>
            aaa
            </Text>
            
            <TouchableOpacity style={{ flexDirection: 'row',
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        height: 130,
                        backgroundColor:'white'}}>
           
                <Image style={{width:100,height:100,marginLeft:5,marginTop: 15}}
                    source={item.photo}
                />
                <View style={{left:15, width: '65%',marginTop: 15}}>
                    <Text style={{fontSize: 18}}>Ph??? b?? cu???n</Text>
                    <Text
                          style={{
                            fontSize: 14,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          Kh??ch h??ng vui l??ng ghi ch?? th...
                    </Text>
                    <Text
                          style={{
                            fontSize: 14,
                            color: '#959595',
                            marginTop: 5,
                          }}>
                          999+ ???? b??n | 10+ ???? th??ch
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{
                                marginTop:7,
                                fontSize:16,
                                fontWeight:'bold'
                            }}
                            >500,000</Text>
                            <Text style={{
                                marginTop:7,
                                fontSize:16,
                                fontWeight:'bold',
                                marginLeft:10,
                                textDecorationLine:'line-through',
                                color:'#9B9B9B'
                            }}>
                                500,000
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons
                              name="add-circle"
                              size={30}
                              color="#EA3534"
                            />
                          </TouchableOpacity>
                    </View>
                    
                </View>
            
            </TouchableOpacity> */}
        </View>
      );
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.delivery}>
                    <View style={{width:'15%',alignItems:'flex-end',height:'100%',justifyContent:'center'}}> 
                        <Image
                        source={{uri:'https://image.vietstock.vn/2019/04/02/GIAO-HANG.jpg'}}
                        style={styles.img}/>
                    </View>
                    <View style={{width:'60%',height:'100%',marginLeft:15,top:15}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>Giao h??ng ti??u chu???n</Text>
                            <Text>D??? ki???n giao l??c 18:00</Text>
                    </View>
                    <View style={{width:'25%',height:'100%',justifyContent:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color: '#347EEF', fontWeight: 'bold'}}>Thay ?????i</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.delivery}>
                    <View style={{width:'15%',alignItems:'flex-end',height:'100%',justifyContent:'center'}}> 
                        <Image
                        source={{uri:'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg'}}
                        style={styles.img}/>
                    </View>
                    <View style={{width:'60%',height:'100%',marginLeft:15,top:15}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>Ng?????i t???o nh??m:Tuanpat</Text>
                            <Text>0 ??ang ?????t | 0 ho??n t???t</Text>
                    </View>
                    <View style={{width:'25%',height:'100%',justifyContent:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color: '#347EEF', fontWeight: 'bold'}}>Chi ti???t</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',height:75,borderBottomWidth:15,borderColor:'#F5F6F8'}}>
                    <View style={{flexDirection: 'row', paddingLeft: 15,height:'50%',width:'100%',alignItems:'center'}}>
                        <Ionicons
                        name="pricetag-outline"
                        size={17}
                        color="#fff"
                        style={{ backgroundColor: '#347EEF',width:15,height:15}}
                        />
                        <Text style={{fontSize:15,marginLeft:5}} numberOfLines={1}>
                        Nh???p "TUHUKHAO":Gi???m 25k tr??n gi?? m??n
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingLeft: 15,height:'50%',width:'100%',alignItems:'center'}}>
                        <Ionicons
                        name="pricetag-outline"
                        size={17}
                        color="#fff"
                        style={{ backgroundColor: '#347EEF',width:15,height:15}}
                        />
                        <Text style={{fontSize:15,marginLeft:5}} numberOfLines={1}>
                        Nh???p "FREESHIP":Freeship t???i 3km
                        </Text>
                        <TouchableOpacity>
                            <Text style={{color: '#347EEF', fontWeight: 'bold',marginLeft:10}}>Xem t???t c???</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View style={{flex:0.5}}>
                <FlatList
                            data={shopData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            
                        /> 
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container:{
        flex:1, 
        //backgroundColor:'red'  
    },
    main:{
       
        flex: 0.3,
        //backgroundColor:'red'
    },
    delivery:{
        height:75,
        width:'100%',
       //backgroundColor:'red'
       flexDirection:'row',
       borderBottomWidth:1,
       paddingBottom:7,
       borderBottomColor:'#F7F9FA',

    },
    img:{
        width:40,
        height:40,
        borderRadius:100,
        borderColor:'red',
        borderWidth:1
    },
  
})
