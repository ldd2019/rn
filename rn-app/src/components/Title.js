import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native"


const { width,height } = Dimensions.get('window');//用于获取屏幕设备的宽高

export default class Home extends React.Component {
    constructor(props) {//？？
        super(props)//??
        const activeIndex = props.navigation.getParam('activeIndex') || 0
        this.state = {
            activeIndex: activeIndex,//将Home页面的activeIndex传递过来
            roomList_index:0,
            tabList: ['按科室', '按疾病','按症状'],
            // roomList: [{"热门科室":["小儿外科","普外科","产科"]},{"内科":[]},"外科","骨外科","口腔科学","眼科学","妇产科","儿科学","耳鼻咽喉科","传染病科","皮肤性病科"],
            roomList:[{'name':'热门科室',
                       'detail':['小儿外科','普外科','产科']
                    },{
                        'name':'内科',
                        'detail':['心血管内科','神经内科','消化内科','免疫科','呼吸科','普通内科']
                    },{
                        'name':'外科',
                        'detail':['胸外科','整形科','乳腺外科','肛肠科','微创外科','普外科']
                    },{
                        'name':'骨外科',
                        'detail':['骨科','脊柱外科','手外科','创伤骨外科','骨关节科','矫正骨科']
                    },{
                        'name':'口腔科学',
                        'detail':['口腔科','牙周科','口腔修复科','种植科','口腔预防科','口腔急诊科']
                    },{
                        'name':'眼科学',
                        'detail':['眼科','小儿眼科','青光眼','眼整形','眼外伤','白内障']
                    },{
                        'name':'妇产科',
                        'detail':['妇科','产科','计划生育科']
                    },{
                        'name':'儿科学',
                        'detail':['新生儿科','小儿呼吸科','小儿心内科','小儿内分泌科','小儿皮肤科','小儿骨科']
                    },{
                        'name':'耳鼻咽喉科',
                        'detail':['耳鼻喉科','头颈外科']
                    },{
                        'name':'传染病科',
                        'detail':['肝病科','传染科','艾滋病科']
                    },{
                        'name':'皮肤性病科',
                        'detail':['皮肤病科','性病科']
                    },{
                        'name':'其他科室',
                        'detail':['急诊科','检验科','体检科','功能检查科']
                    }
                     ],
            diseaseList:[]
//{"热门科室":["小儿外科","普外科","产科"]},
        }
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
        const {tabList, activeIndex,roomList,roomList_index} = this.state
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
                                        roomList[roomList_index].detail.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.8} style={[styles.roomList_item_right]}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        })
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
                                        roomList[roomList_index].detail.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.8} style={[styles.roomList_item_right]}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        })
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
                                        roomList[roomList_index].detail.map((item_detail,index_detail) => {
                                            return (
                                                <TouchableOpacity key={`key_${index_detail}`} activeOpacity={0.9} style={[styles.roomList_item_right]}>
                                                    <Text style={[styles.roomList_detail_text]}> {item_detail}</Text>
                                                </TouchableOpacity>
                                            )
                                            
                                        })
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




