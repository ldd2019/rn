import React from 'react'
import {View, Text, Button,ScrollView,Dimensions, Image,TouchableOpacity} from 'react-native'
import {StyleSheet} from "react-native"
import { AuthSession } from 'expo';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const {width} =  Dimensions.get('window');

export default class Home extends React.Component{
    render(){
        const {navigation} = this.props
        return (
            <ScrollView style={{backgroundColor : "#fff"}}>
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
                <View style={{height:160,margin:10,flexDirection: 'row',backgroundColor:"#fff",overflow: 'hidden'}}>
                    <View   onPress={()=> navigation.navigate('TitlePage')} style={[styles.guider],{justifyContent:"center",borderRadius:10,alignItems:"center",flex:1, backgroundColor:"#e0f0f8",}}>
                        <Image source={require('../img/_挂号.png')} style={{height:40,width:40}}/>                        
                        <Text style={{color:"#0075a9",fontSize:20,marginTop:20}}>挂号</Text>
                    </View>
                    <View style={[styles.variety]}>
                        {/* 下面这三段可以做一个循环处理，根据科室这三项在data内部做初始化数据，动态引入页面，样式不应该写行内样式，index传递可以根据循环的index来传，只需要一个标签即可完成 */}
                        {/* 图片命名尽量不要用中文 可能解析会出问题 -----*/}
                        <TouchableOpacity activeOpacity={0.9} style={[styles.variety_1]} onPress={()=> {navigation.navigate('TitlePage',{activeIndex:0})}}>
                                <Image source={require('../img/科室.png')} style={{height:24,width:24,marginRight:20,}}/>
                                <Text style={[styles.textstyle]} >根据科室</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.variety_1]} onPress={()=> {navigation.navigate('TitlePage',{activeIndex:1})}}>
                            <Image source={require('../img/病史.png')} style={{height:24,width:24,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>根据疾病</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.variety_1]} onPress={()=> {navigation.navigate('TitlePage',{activeIndex:2})}}> 
                            <Image source={require('../img/头痛.png')} style={{height:24,width:24,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>根据症状</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:150,margin:5,marginTop:5,flexDirection: 'row',backgroundColor:"#fff",borderRadius:10,overflow: 'hidden'}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={[styles.variety_2,{marginTop:5,marginRight:5,marginLeft : 5,}]}>
                            <Image source={require('../img/症状自查.png')} style={{height:26,width:26,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>症状查询</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.variety_2,{marginTop:5,marginRight:5,marginLeft : 5,}]}>
                            <Image source={require('../img/疾病.png')} style={{height:26,width:26,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>疾病查询</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={[styles.variety_2,{marginTop:5,marginRight:5}]}>
                            <Image source={require('../img/管理科室.png')} style={{height:26,width:26,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>专科介绍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.variety_2,{marginTop:5,marginRight:5}]}>
                            <Image source={require('../img/医生.png')} style={{height:26,width:26,marginRight:20}}/>
                            <Text style={[styles.textstyle]}>医生介绍</Text>
                        </TouchableOpacity>
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
        backgroundColor:"#fff",
        marginLeft : 5,
        borderRadius:5,
        overflow: 'hidden',//溢出隐藏，加borderradius时，圆框未显示出来，
        shadowColor:"#e0f0f8"
    },
    variety_1:{
        flex:1,
        borderRadius:5,
        marginTop:3,
        backgroundColor:"#e0f0f8",
        justifyContent:"center",
        flexDirection: "row",//使得文字图片横向排列
        alignItems:'center'//使得文字和图片中心点在同一水平线上
    },
    variety_2:{
        flex:1,
        borderRadius:5,
        // marginBottom:5,
        backgroundColor:"#e0f0f8",
        justifyContent:"center",
        flexDirection: "row",//使得文字图片横向排列
        alignItems:'center'//使得文字和图片中心点在同一水平线上
    },
    textstyle:{
        color:"#0075a9",
        fontSize:20
    },

});


