import React from 'react'
import {View, Text, Button, Image, TouchableOpacity,ScrollView, AsyncStorage} from 'react-native'
import {StyleSheet} from "react-native"


export default class Detail extends React.Component{

    signOut(){
        AsyncStorage.clear();
        const {navigation} = this.props
        navigation.navigate('Login')
    }

    render(){
        const {navigation} = this.props
        return (
            <ScrollView style={{backgroundColor : "#fff"}}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.signOut()} style={[styles.News_item]}>
                    <View style={{flex: 1}}>
                        <Text style={[styles.News_text_1]}>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
        color : '#f44',
        paddingTop : 18,
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

