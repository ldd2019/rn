import React from 'react'
import {View, Text, Button,ScrollView,Dimensions, Image} from 'react-native'
import {StyleSheet} from "react-native"
import { AuthSession } from 'expo';
import Swiper from 'react-native-swiper';


const {width} =  Dimensions.get('window');

export default class Home extends React.Component{
    render(){
        const {navigation} = this.props
        return (
            <ScrollView>
            <View>
                {/* <Text style={[styles.title]}>吉大一院</Text> */}
                <Swiper
                    style={styles.wrapper}
                    height={width*40/75}
                    showsButtons={false}
                    autoplay={true}//是否显示左右翻页按钮
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={require('../img/1.jpg')} style={styles.bannerImg} />
                    <Image source={require('../img/2.jpg')} style={styles.bannerImg} />
                    <Image source={require('../img/3.jpg')} style={styles.bannerImg} />
                    <Image source={require('../img/4.jpg')} style={styles.bannerImg} />
                </Swiper>
                <Text>Home</Text>
                <Text style={{color:'#41affc'}} onPress={()=> navigation.navigate('TitlePage')}>点我跳转titlePage详情</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      height:45,
      lineHeight:45,
      color:"#fff",
      textAlign: 'center',
      backgroundColor:"#00a0e9"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    bannerImg: {
        height: width*40/75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor:'#fff',
        borderRadius: 0,
    }
});


