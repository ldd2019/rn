import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native"

export default class News extends React.Component{
    render(){
        return (
            <View style = {[styles.detail_item]}>
                <Image source={require('../img/无数据.png')} style={[styles.detail_img]}/>
                <Text style = {[styles.detail_text]}>暂无数据</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detail_item : {
        flex : 1,
        alignSelf : 'center',//水平居中
        justifyContent : "center",//垂直居中
        alignItems : 'center',
    },
    detail_img : {
        height : 60,
        width : 60,
    },
    detail_text : {
        color : '#abc'
    },
})