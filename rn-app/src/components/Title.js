import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native"


const { width } = Dimensions.get('window');//用于获取屏幕设备的宽高

export default class Home extends React.Component {
    constructor(props) {//？？
        super(props)//??
        const activeIndex = props.navigation.getParam('activeIndex') || 0
        this.state = {
            activeIndex: activeIndex,
            roomList_index:0,
            tabList: ['按科室', '按疾病','按症状'],
            roomList: ["内科","外科","骨外科","口腔科学","眼科学","妇产科","儿科学","耳鼻咽喉科","传染病科","皮肤性病科"],
//{"热门科室":["小儿外科","普外科","产科"]},
        }
    }

    componentDidMount(){
        let id = this.props.navigation.state.params.id;
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
                    <ScrollView>
                        <View >
                            {
                                roomList.map((item,index) => {
                                    return (//return内容需要一个父级元素包裹
                                        <View style={[styles.roomList_item]} >
                                            <TouchableOpacity key={`key_${index}`} activeOpacity={0.9} onPress={() => this.roomListTab(index)} 
                                            style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                <Text>{item}</Text>
                                            </TouchableOpacity>
                                            <Text style={[styles.roomList_item_right]}></Text>
                                        </View>
                                    )
                                })
                            }
                            
                        </View>
                    </ScrollView> :  (activeIndex === 1?<ScrollView>
                        <View >
                            {
                                 roomList.map((item,index) => {
                                    return (//return内容需要一个父级元素包裹
                                        <View style={[styles.roomList_item]} >
                                            <TouchableOpacity key={`key_${index}`} activeOpacity={0.9} onPress={() => this.roomListTab(index)} 
                                            style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                <Text>{item}</Text>
                                            </TouchableOpacity>
                                            <Text style={[styles.roomList_item_right]}></Text>
                                        </View>
                                    )
                                })
                            }
                            
                        </View>
                    </ScrollView> : <ScrollView>
                        <View >
                            {
                                 roomList.map((item,index) => {
                                    return (//return内容需要一个父级元素包裹
                                        <View style={[styles.roomList_item]} >
                                            <TouchableOpacity key={`key_${index}`} activeOpacity={0.9} onPress={() => this.roomListTab(index)} 
                                            style={[index === roomList_index ? styles.roomList_active_item_left: styles.roomList_inactive_item_left]}>
                                                <Text>{item}</Text>
                                            </TouchableOpacity>
                                            <Text style={[styles.roomList_item_right]}></Text>
                                        </View>
                                    )
                                })
                            }
                            
                        </View>
                    </ScrollView>)
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
        height:80,
        flexDirection: 'row',
    },
    roomList_inactive_item_left: {
        backgroundColor:"#e0f0f8",
        flex:1,

    },
    roomList_item_right: {
        backgroundColor:"#fff",
        flex:1,
    },
    roomList_active_item_left: {
        backgroundColor: "#fff",
        flex:1
    }

});




