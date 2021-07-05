import React, { Component, useState ,useEffect} from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList, AppRegistry ,Modal} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Marterial from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Datadichvu from './data/datadichvu'
import {getCart} from '../Services/API'
import {useDispatch, useSelector} from 'react-redux';
export default function Draff() {
    const [dataShop, setDataShop] = useState();
    const [Show,setShow]=useState(false)
    const [title,setTitle]=useState('Danh mục')
    const dispatch = useDispatch()
    const data = useSelector(store => store.Cart);
    const ToggleModal=()=>{
        setShow(!Show)
    }
    useEffect(() => {
        const getShop = async () => {
          const result = await getCart(data.idShop);
          setDataShop(result.data.reply.menu_infos);
        };
        getShop();
      }, []);
    const deleteCart = () => {
        dispatch({type: 'REMOVE_CART'});
      };
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <View style={styles.service}>
                    <TouchableOpacity onPress={ToggleModal} style={{flexDirection:'row'}}>
                       <Text style={{marginLeft:15}}>{title}</Text>
                       <Ionicons name="chevron-down" size={20} color={"black"} />
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
                <View style={styles.delete}>
                    <TouchableOpacity onPress={deleteCart}>
                        <Text>Xóa hết</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.line}></View> */}
            {/* <View style={styles.center}>
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
            </View> */}
            <FlatList
            data={dataShop}
            keyExtractor={item => item.dish_type_id}
            renderItem={({item}) =>
            item.dishes.map(e => {
            if (
              data.idProduct.find(idProduct => idProduct == e.id) &&
              data.dish_type_id.find(
                dish_type_id => dish_type_id == item.dish_type_id,
              ) 
            )
              return (
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  key={e.id}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      Đồ ăn
                    </Text>
                    <Image
                      source={{uri: e.photos?.[0].value}}
                      style={styles.image}
                    />
                  </View>
                  <View style={{marginLeft: 15, width: '100%',marginTop:10}}>
                    <Text
                      style={{fontSize: 17, fontWeight: 'bold', width: '100%'}}
                      numberOfLines={1}>
                      {e.name}
                    </Text>
                    <Text
                      style={{color: '#929292', marginTop: 8, marginBottom: 5,width:'60%'}}>
                      {e.description}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {e.price.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
          })
        }
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        //backgroundColor:'red',
    },
    menu:{
        width:'100%',
        height:40,
        //backgroundColor:'blue',
        flexDirection:'row'
    },
    service:{
        width:'50%',
        height:'100%',
        justifyContent:'center'
    },
    delete:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        marginLeft:110
    },
    line:{
        height:15,
        backgroundColor:'grey'
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
    image: {
        width: 100,
        height: 100,
      },
    btn: {
        height: 150,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
      },
})
