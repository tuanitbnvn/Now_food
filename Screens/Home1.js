import React, { Component, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, AppRegistry } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Data from './data/dataicon'
import DATA from './data/datacolection';
import Datasale from './data/datasale'
import Navigation from '../Navigation/Navigation';
const Home1 = ({navigation}) => {
    const listbtn1 = () => {
        return Data.map((e, i) => {
            if (e.id < 10) {
                return (
                    <TouchableOpacity style={{ width: 70, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }} onPress={()=>navigation.navigate('Productfood',{id:e.id})}  key={e.id}>
                        <View style={{ borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, }}>
                            <Image key={i} source={e.photo} style={{ width: 50, height: 50, borderRadius: 15, }} />
                        </View>
                        <Text style={{ width: 80, textAlign: 'center', fontSize: 10 }}>{e.title}</Text>
                    </TouchableOpacity>
                )
            }

        })
    };

    const listbtn2 = () => {
        return Data.map((e, i) => {
            if (e.id < 18 && e.id > 9) {
                return (
                    <TouchableOpacity style={{ width: 70, marginLeft: 5, justifyContent: 'center', alignItems: 'center', }} key={e.id}>
                        <View style={{ borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, }}>
                            <Image key={i} source={e.photo} style={{ width: 50, height: 50, borderRadius: 15, }} />
                        </View>
                        <Text style={{ width: 80, textAlign: 'center', fontSize: 10 }}>{e.title}</Text>
                    </TouchableOpacity>
                )
            }

        })
    };
    const renderItem = ({item}) => (
        <View style={{ width: 135, height: 160 }}>
            <Image
                style={{ width: 120, height: 120, flexDirection: 'column', alignItems: 'center' }}
                source={ item.photo }
            />
            <Text >{item.name}</Text>
        </View>
    );
    return (
        <View style={style.container}>
             <View style={style.header}>
                <View style={style.location}>
                    <TouchableOpacity>
                        <View>
                            <Text style={{ color: '#999999' }}>Giao hàng đến:</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <Ionicons name="location" size={16} color={'#f13233'} style={{ marginTop: 2 }} />
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>41 Vĩnh Hưng, Hoàng Mai, Hà Nội, Việt Nam</Text>
                            <Ionicons name="chevron-forward" size={20} style={{ marginLeft: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={{ borderColor: '#777', borderWidth: 1, margin: 10, height: 40, paddingLeft: 15, borderRadius: 200, flexDirection: 'row', backgroundColor: '#f3f5f8' }}>
                            <Ionicons name="search" size={16} color={'#c9cacc'} style={{ marginTop: 10 }} />
                            <TextInput placeholder="Tìm địa điểm, món ăn, địa chỉ"></TextInput>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.line1}></View>

            <View style={style.main}>
                <ScrollView>
                    <View style={style.banner1}>
                        <Swiper activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 3, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />} dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />} style={style.wrapper} showsButtons={false} autoplayTimeout={5} autoplay>
                            <View style={style.slide1}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image5.jpg")} />
                            </View>
                            <View style={style.slide2}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image6.jpg")} />
                            </View>
                            <View style={style.slide3}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image7.jpg")} />
                            </View>
                        </Swiper>
                    </View>
                    <View style={style.menu}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    {listbtn1()}
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    {listbtn2()}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={style.line2}></View>
                    <View style={style.collection}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 45, }}>
                            <View style={{ width: '50%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10 }}>Bộ sưu tập</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center' }}>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Text >Xem thêm</Text>
                                    <Ionicons name="chevron-forward" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal
                                style={{ marginLeft: 12 }}
                            />
                        </View>
                    </View>
                    <View style={style.banner2}>
                        <Swiper activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 3, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />} dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />} style={{ marginTop: 9 }} autoplayTimeout={5} autoplay>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image5.jpg")} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image6.jpg")} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 120, width: '95%' }}
                                    source={require("./image/image7.jpg")} />
                            </View>
                        </Swiper>
                    </View>

                </ScrollView>
            </View>
            <View style={style.line1}></View>
            
        </View>
    )
}

export default Home1
const style = StyleSheet.create({
    container: {
        
        flex:1

    },
    header: {
        flex: 1.45,
        //backgroundColor:'red',

    },
    main: {
        flex: 6,
    },
    line1: {
        height: 1,
        backgroundColor: '#d9d9d9',
    },
    line2: {
        height: 15,
        backgroundColor: '#f4f6f8',
    },
    
    home: {
        height: "100%",
        width: "20%",

    },
    wishlist: {
        height: "100%",
        width: "20%",
    },
    cart: {
        height: "100%",
        width: "20%",
    },
    me: {
        height: "100%",
        width: "20%",
    },
    noti: {
        height: "100%",
        width: "20%",
    },
    banner1: {
        height: 130,
    },
    wrapper: {
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        height: 150,
        //backgroundColor:'red',
    },
    collection: {
        height: 205,
    },
    banner2: {
        height: 140,
        backgroundColor: '#f4f6f8',



    },
})

