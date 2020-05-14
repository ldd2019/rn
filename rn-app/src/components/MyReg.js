import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { StyleSheet } from "react-native"
import HttpUtils from "../utils/request"

export default class My extends React.Component{
    constructor(props){
        super(props)
        //将个人主页的id传过来
        const userData = this.props.navigation.getParam('userData') || null
        this.state = {
            userData : userData,
            userId: userData.id,
            register : '',//记录挂号信息
        }
    }

    componentDidMount(){
        HttpUtils.get('registerList',{"userId":this.state.userId}).then((data) => {
            this.setState({
                register : data.data
            })
            console.log('regis',data)
        })
        this.moment()
        
    }
    //判断挂号时间是否过期
    moment(){
        const today = new Date().getTime()
        console.log(today)
    }

    render(){
        const {register,userId,userData} = this.state
        console.log('register,u',register,userId)
        return (
            <View style = {[styles.detail]}>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>患者姓名： {userData.name}</Text>
                </View>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>挂号科室：{register.department}</Text>
                </View>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>预约医生：{register.doctor_name}</Text>
                </View>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>预约时间： {register.time}</Text>
                </View>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>排队号： </Text>
                </View>
                <View style={[styles.detail_item]}>
                    <Text style = {[styles.detail_text]}>状态： {register.status}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    detail:{
        // paddingHorizontal: "10,10",
        paddingLeft : 10,
        paddingRight: 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderRadius : 10,
        
    },
    detail_item : {
        // flex : 1,
        // alignSelf : 'center',//水平居中
        // justifyContent : "center",//垂直居中
        // alignItems : 'center',
        backgroundColor : '#e0f0f8',
        paddingTop : 6,
        paddingBottom : 6,
        // borderBottomWidth:1,
        // borderBottomColor:'#e2eaee',
        // overflow : "hidden",
    },
    detail_text : {
        color : '#0075a9',
        paddingLeft : 20,
        fontSize : 18
    },
})