import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native"
import HttpUtils from '../utils/request';


const { width,height } = Dimensions.get('window');//用于获取屏幕设备的宽高

export default class Home extends React.Component {
    constructor(props) {//？？
        super(props)//??
        const activeIndex = props.navigation.getParam('activeIndex') || 0
        this.state = {//初始化
            activeIndex: activeIndex,//将Home页面的activeIndex传递过来
            roomList_index:0,
            tabList: ['按科室', '按疾病','按症状'],
            roomList:[],
        }
    }

    componentDidMount(){
        HttpUtils.get('register/department').then((data) =>{
            this.setState({
                roomList: data.data,
            })
            
        })
    }

    handleTab = (index) => {
        this.setState({
            activeIndex: index,
        })
    }

    roomListTab = (index) => {
        this.setState({
            roomList_index: index
        })
    }

    render() {
        
        const {tabList, activeIndex,roomList,roomList_index} = this.state//取值
        const {navigation} = this.props
        // console.log('roomList',roomList[roomList_index])
        return (
            <View>
                
                <View style={[styles.flex_row_center_center,styles.margin_top_bottom_10]}>
                    {//多种样式添加方法
                        tabList.map((item, index) => {
                            return (//??key
                                <TouchableOpacity key={`key_${index}`} activeOpacity={0.8} onPress={() => this.handleTab(index)}
                                    style={[styles.tab_item, index === activeIndex ? styles.active_item: styles.inactive_item]}>
                                    <Text style={[index === activeIndex ? styles.active_text: styles.inactive_text]}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                {
                    activeIndex === 0 ?//加的判断
                    
                        <View style={[styles.roomList_item]} >
                            <ScrollView style={{flex:1,height:height}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList.map((item,index) => {
                                            return (//return内容需要一个父级元素包裹
                                                <View key={`key_${index}`}>
                                                    <TouchableOpacity  activeOpacity={0.8} onPress={() => this.roomListTab(index)} 
                                                    style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                        <Text style={[index === roomList_index ? styles.roomList_active_text_left: styles.roomList_inactive_text_left]}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                    {/* <Text style={[styles.roomList_item_right]}>{item[roomList_index].detail}</Text> */}
                                                    
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{height:128}}></View>
                            </ScrollView>
                            <ScrollView style={{flex:1,height:height-128,}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList[roomList_index]  && roomList[roomList_index].details ? roomList[roomList_index].details.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.8} style={[styles.roomList_item_right]}
                                                 onPress ={() => {navigation.navigate('RoomReg',{Reg_Index:item_detail.key})}}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail.details}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        }):null 
                                    }
                                </View>
                        </ScrollView>
                    </View> : (activeIndex === 1?
                     
                        <View style={[styles.roomList_item]} >
                            <ScrollView style={{flex:1,height:height,}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList.map((item,index) => {
                                            return (//return内容需要一个父级元素包裹
                                                <View key={`key_${index}`}>
                                                    <TouchableOpacity  activeOpacity={0.8} onPress={() => this.roomListTab(index)} 
                                                    style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                        <Text style={[index === roomList_index ? styles.roomList_active_text_left: styles.roomList_inactive_text_left]}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                    {/* <Text style={[styles.roomList_item_right]}>{item[roomList_index].detail}</Text> */}
                                                    
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{height:128}}></View>
                            </ScrollView>
                            <ScrollView style={{flex:1,height:height-128,}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList[roomList_index]  && roomList[roomList_index].details ? roomList[roomList_index].details.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.8} style={[styles.roomList_item_right]}
                                                 onPress ={() => {navigation.navigate('RoomReg',{Reg_Index:index_detail})}}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail.details}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        }):null 
                                    }
                                </View>
                            </ScrollView>
                        </View> : <View style={[styles.roomList_item]} >
                            <ScrollView style={{flex:1,height:height}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList.map((item,index) => {
                                            return (//return内容需要一个父级元素包裹
                                                <View key={`key_${index}`}>
                                                    <TouchableOpacity  activeOpacity={0.9} onPress={() => this.roomListTab(index)} 
                                                    style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                        <Text style={[index === roomList_index ? styles.roomList_active_text_left: styles.roomList_inactive_text_left]}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                    {/* <Text style={[styles.roomList_item_right]}>{item[roomList_index].detail}</Text> */}
                                                    
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{height:128}}></View>
                            </ScrollView>
                            <ScrollView style={{flex:1,height:height,}} showsVerticalScrollIndicator = {false}>
                                <View >
                                    {
                                        roomList[roomList_index]  && roomList[roomList_index].details ? roomList[roomList_index].details.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.8} style={[styles.roomList_item_right]}
                                                 onPress ={() => {navigation.navigate('RoomReg',{Reg_Index:index_detail})}}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail.details}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        }):null 
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex_row_center_center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    margin_top_bottom_10: {
        marginVertical:10,
    },
    tab_item: {
        paddingHorizontal:10,
        paddingVertical: 4,
        borderRadius:10,
        marginRight:16,
    },
    active_item: {
        backgroundColor:'#41affc',

    },
    inactive_item: {
        backgroundColor:'#e0f0f8',
    },
    active_text: {
        color:'#fff',
        fontSize:16
    },
    inactive_text: {
        color:'#0075a9',
        fontSize:16
    },
    roomList_item: {
        flexDirection: 'row',
        flex:1,
        paddingBottom:45,

    },
    roomList_inactive_item_left: {
        backgroundColor:"#e0f0f8",
        
    },
    roomList_item_right: {
        backgroundColor:"#fff",
        
    },
    roomList_active_item_left: {
        backgroundColor: "#fff",

    },
    roomList_active_text_left: {
        color: "#41affc",
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        fontSize:16,
    },
    roomList_inactive_text_left: {
        color: "#0075a9",
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        fontSize:16,
    },
    roomList_detail_text:{
        color:"#0075a9",
        fontSize:16,
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
    },

});




