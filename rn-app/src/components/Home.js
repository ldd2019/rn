import React from 'react'
import {View, Text, Button,ScrollView,Dimensions, Image} from 'react-native'
import {StyleSheet} from "react-native"
import { AuthSession } from 'expo';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const {width} =  Dimensions.get('window');

export default class Home extends React.Component{
    render(){
        const {navigation} = this.props
        return (
            <ScrollView>
            <View>
                {/* <Text style={[styles.title]}>吉大一院</Text> */}
                <Swiper
                    style={styles.swiper}
                    height={150}
                    horizontal={true}
                    paginationStyle={{bottom: 8}}
                    loop={true}
                    autoplay={true}//是否显示左右翻页
                    activeDotStyle={{backgroundColor:"#ddd"}}
                    showsButtons={false}>
                    <Image source={require('../img/1.jpg')} style={styles.img}/>
                    <Image source={require('../img/2.jpg')} style={styles.img}/>
                    <Image source={require('../img/3.jpg')} style={styles.img}/>
                    <Image source={require('../img/4.jpg')} style={styles.img}/>
                </Swiper>
                {/* <Text style={{color:'#41affc'}} onPress={()=> navigation.navigate('TitlePage')}>点我跳转titlePage详情</Text> */}
                <View style={{height:160,margin:10,flexDirection: 'row',backgroundColor:"#e2eaee",borderRadius:10,overflow: 'hidden'}}>
                    <View style={[styles.guider],{justifyContent:"center",alignItems:"center",flex:1, }}>
                        <Image source={require('../img/预约挂号.png')} style={{height:40,width:40}}/>                        
                        <Text style={{color:"#178a3d",fontSize:20,marginTop:20}}>挂号</Text>
                    </View>
                    <View style={[styles.variety]}>
                        <View style={[styles.variety_1]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:20,width:20}}/>
                            <Text style={[styles.textstyle]}>根据科室</Text>
                        </View>
                        <View style={[styles.variety_1]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>根据疾病</Text>
                        </View>
                        <View style={[styles.variety_1]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>根据症状</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:150,margin:10,marginTop:10,flexDirection: 'row',backgroundColor:"#e2eaee",borderRadius:10,overflow: 'hidden'}}>
                    <View style={{flex:1}}>
                        <View style={[styles.variety_1,{margin:5}]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>症状查询</Text>
                        </View>
                        <View style={[styles.variety_1,{margin:5}]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>疾病查询</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={[styles.variety_1,{marginTop:5,marginRight:5}]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>专科介绍</Text>
                        </View>
                        <View style={[styles.variety_1,{marginTop:5,marginRight:5}]}>
                            <Image source={require('../img/预约挂号.png')} style={{height:40,width:40,}}/>
                            <Text style={[styles.textstyle]}>医生介绍</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    swiper:{
        
    },
    img: {
        width: Dimensions.width,
        height: 150,
    },
    guider:{
        height:150,
        backgroundColor:"#e0f0f8",
        margin:5,
        borderRadius:5,
        flex:1,       
    },
    variety:{
        flex:3,
        backgroundColor:"#e2eaee",
        margin:5,
        borderRadius:5,
        overflow: 'hidden',//溢出隐藏，加borderradius时，圆框未显示出来，
        shadowColor:"#e0f0f8"
    },
    variety_1:{
        flex:1,
        borderRadius:5,
        marginBottom:5,
        backgroundColor:"#d5e5f8",
        flexDirection: "row",//使得文字图片横向排列
        alignItems:'center'//使得文字和图片中心点在同一水平线上
    },
    textstyle:{
        color:"#5b656a",
        fontSize:20
    }


});


