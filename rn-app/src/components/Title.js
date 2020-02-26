import React from 'react'
import { View, Text, Button, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native"


const { width } = Dimensions.get('window');

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            tabList: ['嗨嗨嗨', '嗷嗷嗷']
        }
    }

    handleTab = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    render() {
        const {tabList, activeIndex} = this.state
        return (
            <View>
                <View style={[styles.flex_row_center_center,styles.margin_top_bottom_10]}>
                    {
                        tabList.map((item, index) => {
                            return (
                                <TouchableOpacity key={`key_${index}`} activeOpacity={0.8} onPress={() => this.handleTab(index)}
                                    style={[styles.tab_item, index === activeIndex ? styles.active_item: styles.inactive_item]}>
                                    <Text style={[index === activeIndex ? styles.active_text: '']}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                {
                    activeIndex === 0 ?
                        <View>
                            <Text>title页面</Text>
                            <Text>activeIndex 为0 </Text>
                            <Text>activeIndex 为0 </Text>
                            <Text>activeIndex 为0 </Text>
                            <Text>activeIndex 为0 </Text>

                        </View> :  <View>
                            <Text>title页面</Text>
                            <Text>activeIndex 为1 </Text>
                            <Text>activeIndex 为1 </Text>
                            <Text>activeIndex 为1 </Text>
                        </View>
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
        paddingHorizontal:6,
        paddingVertical: 4,
        borderRadius:10,
        marginRight:5,
    },
    active_item: {
        backgroundColor:'#41affc',
    },
    inactive_item: {
        backgroundColor:'#aaa',
    },
    active_text: {
        color:'#fff',
    }

});




