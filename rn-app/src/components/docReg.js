import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { StyleSheet } from "react-native"
import HttpUtils from '../utils/request';


const {width} =  Dimensions.get('window');

export default class My extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            doctorInfo : [],//医生详情列表
            workDays :[],//医生工作时间列表
            num : [],//排队号数组
            time: '',//记录点击的挂号时间
            userId: '',
            status : '',//用户挂号信息表里的
        }
    }

    componentDidMount(){
        // this.getmyDate()  获取医生上班时间表
        const doctorId = this.props.navigation.getParam('doctorId')//将医生列表所点击到的医生id传过来，用来获取医生值班时间表
        HttpUtils.get('register/department/doctorInfo',{"doctorId" : doctorId}).then((data) =>{
            this.setState({
                doctorInfo : data.data,
                workDays : data.data.workDays,//工作时间列表在详情列表里
                num : data.data.num
            })
           
        })

        this.storage()
        
    }

    
    //获取本地储存的用户Id
    storage(){
        AsyncStorage.getItem('userData',(err, result) => {
            console.log("userId" , JSON.parse(result).id)
            this.setState({
                userId : JSON.parse(result).id
            })
            //获取用户挂号信息的status
            HttpUtils.get('registerList',{"userId" : JSON.parse(result).id}).then((data) =>{
                console.log('re',data)
               if(data.errno == 0){
                    this.setState({
                        status : data.data.status
                    })
               }
            
            })
        });
    }

    //将点击的挂号时间提交到数据库
    getTime = (data) =>{
        console.log('DDDD',data)
        const doctorId = this.props.navigation.getParam('doctorId')
        if(this.state.status != 1 ){
            HttpUtils.post('register/department/register',{
                userId : this.state.userId,
                doctorId : this.state.doctorInfo.id,
                doctorName : this.state.doctorInfo.name,
                department : this.state.doctorInfo.department,
                time : data.day,
                ////更新剩余挂号数量
                weekday : data.weekday,
                noon : data.noon,
            }).then( () => {
                alert("挂号成功")
                //重新获取挂号信息列表
                HttpUtils.get('register/department/doctorInfo',{"doctorId" : doctorId}).then((data) =>{
                    this.setState({
                        doctorInfo : data.data,
                        workDays : data.data.workDays,//工作时间列表在详情列表里
                        num : data.data.num
                    })
                
                })
            }).catch(() => {

            })
            
        }else{
            alert("只能挂一个号哦 ~")
        }
    }

    render(){
        const { workDays,doctorInfo} = this.state
        return (
            <ScrollView>
                <View >
                    <View style = {[styles.reg_item]}>
                        <Image source={require('../img/医生6.png')} style={[styles.detail_img]}/>
                        <View style={[styles.reg_text]}>
                            <Text style={[styles.text_name]}>{doctorInfo.name}</Text>
                            <Text style={[styles.text_job]}>{doctorInfo.position}</Text>
                            <Text style={[styles.text_room]}>{doctorInfo.department}</Text>
                            <Text  style={[styles.text_good]}>{doctorInfo.goodat}</Text>
                        </View>
                    </View>
                {/* <Image source={require('../img/无数据.png')} style={[styles.detail_img]}/> */}
                    {
                        workDays.map((item,index) => {
                            return (
                                <View style={[styles.days_item]} key={`key_${index}`}>
                                    <View style={{flexDirection: "row",}}>
                                        <Text style={[styles.days_text]}>{item.day} </Text>
                                        <Text style={[styles.num]}>剩余号 {item.num}</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.button]} activeOpacity={1} onPress = {() => this.getTime(item)}>
                                        <Text style ={[styles.goreg]}>挂号</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    days_item : {
        height:50,
        flexDirection: "row",
        alignItems:'center',
        backgroundColor: '#fff',
        marginBottom: 2,
        paddingLeft:20,
        paddingRight: 20,
        justifyContent :'space-between',
    },
    num:{
        color : '#a1a1a1',
    },
    goreg :{
        width : 60,
        height : 30,
        backgroundColor :'#83a7f9',
        fontSize :16,
        color :'#fff',
        textAlign : 'center',
        paddingTop : 4,
        borderRadius :4,
        
    },
   
    days_text: {
        fontSize: 16,
        width: 210,
    },
    reg_item : {
        width : width,
        height : 160,
        backgroundColor : '#fff',
        flexDirection : 'row',
        marginBottom : 10
    },
    reg_text :{
        marginTop :15,
        marginLeft :15,
        width : 230
    },
    detail_img : {
        height : 78,
        width : 78,
        marginLeft : 15 ,
        marginTop : 15 ,
        borderRadius : 6,
        backgroundColor : '#ddd'
    },
    text_name :{
        fontSize : 20,
        marginBottom :5,
    },
    text_job : {
        marginBottom :5,
        color : '#a1a1a1',
    },
    text_room :{
        marginBottom :5,
        color : '#a1a1a1',
    },
    text_good : {
        marginBottom :5,
        marginTop : 5,
        color : '#555',
    },
    
})