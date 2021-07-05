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
import {useDispatch, useSelector} from 'react-redux';
const ProductDescribe = ({route, navigation}) => {
    const {idShop,idProduct,dish_type_id} = route.params;
    console.log('check:',idShop,idProduct,dish_type_id)
    const dispatch = useDispatch();
    const data=useSelector(store=>store.Shop)
   
    useEffect(()=>{
      dispatch({type:'idProduct',
                  data:{idProduct: idProduct,dish_type_id:dish_type_id}}) 
      },[]);
    const [productDetail, setProductDetail] = useState();
    useEffect(() => {
        const getDetailProduct = async () => {
          const result = await getShop(idShop);
          setProductDetail(result.data.reply.menu_infos);
          console.log(result.data.reply.menu_infos);
        };
        getDetailProduct();
      }, []);
      const RenderItem = item => {
        if(item.id==idProduct)
        return (
          <View key={item.id}>
            <ImageBackground
              source={{uri: item.photos?.[4].value}}
              style={styles.imgbackground}
              resizeMode="cover">
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Ionicons
                  name="chevron-back-outline"
                  size={35}
                  color="#fff"
                  style={{marginTop: 15, marginLeft: 8}}
                />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.boxtitle}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.sold}>
                999+ đã bán | {item.total_like} đã thích
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.price}>{item.discount_price?.text}</Text>
                  <Text style={styles.oldprice}>{item.price.text}</Text>
                </View>
                <TouchableOpacity onPress={()=>ADDCART()}>
                  <Ionicons name="add-circle" size={35} color="#EA3534" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      };
      const ADDCART =()=>{
        dispatch({
            type:'ADD_CART',
            data:{
              idShop: idShop,
              idProduct: data.idProduct,
              dish_type_id: data.dish_type_id
            }

        })
      }
    return (
        <View style={styles.container}>
      <FlatList
        data={productDetail}
        renderItem={({item}) =>
          item.dishes.map(e => {
               return RenderItem(e);
          })
        }
        keyExtractor={item => item.dish_type_id}
      />
    </View>
    )
}

export default ProductDescribe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      imgbackground: {
        width: '100%',
        height: 300,
      },
      boxtitle: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 20,
        height: 180,
    
        borderBottomWidth: 1,
        borderBottomColor: '#EBEDEE',
      },
      description:{
        fontSize: 16,
        color: '#959595',
        marginTop: 10,
      },
      sold: {
        fontSize: 16,
        color: '#959595',
        marginTop: 5,
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      oldprice: {
        textDecorationLine: 'line-through',
        fontSize: 20,
        color: '#C5C5C5',
    
        marginLeft: 10,
      },
      
})
