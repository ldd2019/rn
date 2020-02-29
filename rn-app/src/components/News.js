import React from 'react'
import {View, Text, Button, Image, TouchableOpacity} from 'react-native'
import {StyleSheet} from "react-native"


export default class Detail extends React.Component{
    render(){
        const {navigation} = this.props
        return (
            <TouchableOpacity onPress={() => navigation.navigate('NewsPage')} style={[styles.News_item]}>
                <Image source={require('../img/新闻.png')} style={{height:40,width:40,}}/>
                <View style={{flex: 1}}>
                    <Text style={[styles.News_text_1]}>云消息</Text>
                    <Text style={[styles.News_text_2]}>暂无新的通知</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    News_item : {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingLeft:20,
        backgroundColor: '#e0f0f8'
    },
    News_text_1 : {
        color : '#0075a9',
        paddingTop : 8,
        paddingLeft : 20,
        fontSize : 20,
        flex : 1
    },
    News_text_2 : {
        color : '#abc',
        paddingLeft : 20,
        fontSize : 14,
        flex : 1
    },

})

