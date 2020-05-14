import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity , } from 'react-native'
import { StyleSheet } from "react-native"
import HttpUtils from '../utils/request';

const {width} =  Dimensions.get('window');

export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            docsList:[]
            // docsList : [{
            //     'name': '王二狗',
            //     'job' : '主治医师',
            //     'room': '小儿外科',
            //     'good': '各类复杂先天性心脏病外科根治和气管狭窄画片交织术等各类复杂先天性心脏病外科根治和气管狭窄画片交织术等'
            // },{
            //     'name': '李大柱',
            //     'job' : '副主任医师',
            //     'room': '小儿外科',
            //     'good': '各类复杂先天性心脏病外科根治和气管狭窄画片交织术等各类复杂先天性心脏病外科根治和气管狭窄画片交织术等'
            // }]
        }
    }

    componentDidMount(){
        const Reg_Index = this.props.navigation.getParam('Reg_Index')//将Title页面的Reg_Index传过来,就是详情科室details的key值，根据detailsid 查出对应医生
        HttpUtils.get('register/department/doctor',{ "detailsId" : Reg_Index}).then((data) =>{
            this.setState({
                docsList: data.data,
            })
            
        })

    }

    docsList = (index) => {
        this.setState({
            docsList_index: index
        })
    }

    render(){
        const {Reg_Index, docsList } = this.state//取值
        const {navigation} = this.props
        // console.log('docsList',docsList)
        return (
            <ScrollView style = {[]} showsVerticalScrollIndicator = {false}>
                {
                    <View >
                        {
                            docsList.map((item,index) => {
                                return (
                                    <View key={`key_${index}`} style = {[styles.reg_item]}>
                                        <Image source={require('../img/医生6.png')} style={[styles.detail_img]}/>
                                        <View style={[styles.reg_text]}>
                                            <Text style={[styles.text_name]}>{item.name}</Text>
                                            <Text style={[styles.text_job]}>{item.position}</Text>
                                            <Text style={[styles.text_room]}>{item.department}</Text>
                                            <Text numberOfLines={2} style={[styles.text_good]}>{item.goodat}</Text>
                                        </View>
                                        <TouchableOpacity style={{}} activeOpacity={1} onPress={() => navigation.navigate('DocReg',{doctorId : item.id})}>
                                            <Text style ={[styles.goreg]}>去挂号</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                //     Reg_Index === 0 ? 
                //     <View >
                //         {
                //             docsList.map((item,index) => {
                //                 return (
                //                     <View key={`key_${index}`} style = {[styles.reg_item]}>
                //                         <Image source={require('../img/医生6.png')} style={[styles.detail_img]}/>
                //                         <View style={[styles.reg_text]}>
                //                             <Text style={[styles.text_name]}>{item.name}</Text>
                //                             <Text style={[styles.text_job]}>{item.job}</Text>
                //                             <Text style={[styles.text_room]}> {item.room}</Text>
                //                             <Text numberOfLines={2} style={[styles.text_good]}>{item.good}</Text>
                //                         </View>
                //                         <TouchableOpacity style={{}} activeOpacity={1} onPress={() => navigation.navigate('DocReg')}>
                //                             <Text style ={[styles.goreg]}>去挂号</Text>
                //                         </TouchableOpacity>
                //                     </View>
                //                 )
                //             })
                //         }
                        
                //     </View> : ( Reg_Index === 1 ? 
                //     <View >
                //         <Image source={require('../img/医生6.png')} style={[styles.detail_img]}/>
                //         <Text style = {[styles.detail_text]}>2</Text>
                    
                //     </View> : 
                //     <View style = {[styles.detail_item]}>
                //         <Image source={require('../img/无数据.png')} style={[styles.detail_img]}/>
                //         <Text style = {[styles.detail_text]}>3</Text>
                        
                //     </View>
                // )
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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
    goreg :{
        width : 60,
        height : 30,
        backgroundColor :'#83a7f9',
        marginTop : 15,
        fontSize :16,
        color :'#fff',
        textAlign : 'center',
        paddingTop : 4,
        borderRadius :4
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
        // numberOfLines : 10
        color : '#555',
    },
})