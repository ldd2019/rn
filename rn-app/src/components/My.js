import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
import {View, Text, Button, Image,ScrollView, AsyncStorage} from 'react-native'
import { StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class My extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            userData :'',
        }
    }
    componentDidMount(){
        this.storage()
       
    }
    storage(){
        AsyncStorage.getItem('userData',(err, result) => {
            this.setState({
                userData : JSON.parse(result)
            })
            console.log('user',result)
        });
    }

    login(){
        const {navigation} = this.props
        navigation.navigate('Login')
    }
    render(){
        const {navigation} = this.props
        const {userData} = this.state
        console.log('dataa',userData)
        return (
            <ScrollView style={{backgroundColor : "#fff"}}>
            <View style= {{backgroundColor : "#fff"}}>
                <LinearGradient colors={[ '#b6d2ff','#83a7f9', '#83a7f9', ]} style={{height: 180, }}>
                    <View style={{flexDirection : "row", alignItems : "center", paddingLeft : 30,marginTop : 50,marginBottom : 20}}>
                        <Image source={require('../img/头像7.png')} style={[styles.title_img]}/>
                        {
                            userData ? <Text style={[styles.user_text]}>用户：{userData?userData.phone:''}</Text>:
                                        <TouchableOpacity onPress={() => this.login()}>
                                            <Text style={[styles.user_text]}>登录</Text>
                                        </TouchableOpacity>
                        }
                        {/* <TouchableOpacity onPress={ () => navigation.navigate('Sign_out')} >
                            <Text style={[styles.my_set]}>设置</Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',}}>
                        <View style={[styles.title_line]}>
                            <Text style = {[styles.title_line_text]}>诊疗卡</Text>
                        </View>
                        <View style={[styles.title_line]}>
                            <Text style = {[styles.title_line_text]}>健康卡</Text>
                        </View>
                        <View style={[styles.title_line]}>
                            <Text style = {[styles.title_line_text]}>我的家属</Text>
                        </View>
                    </View>
                    
                </LinearGradient>
                <View style={{ flexDirection: 'row',height:70 ,backgroundColor : "#fff" , }}>
                    <View style={{ flex : 1,alignItems: "center", justifyContent: 'center' }}>
                        <TouchableOpacity style={{alignItems: "center",}} activeOpacity={0.9} onPress={() => navigation.navigate('Regpage',{userData : userData})}>
                            <Image source={require('../img/预约挂号3.png')} style={{height :20, width : 20,}}/>
                            <Text style = {{ paddingTop:8}}>我的挂号</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex : 1, alignItems: "center", justifyContent: 'center'}}>
                        <Image source={require('../img/实时处方管理.png')} style={{height :20, width : 20}}/>
                        <Text style = {{ paddingTop:8}}>我的处方</Text>
                    </View>
                    <View style={{flex : 1, alignItems: "center", justifyContent: 'center'}}>
                        <Image source={require('../img/医生3.png')} style={{height :22, width : 22}}/>
                        <Text style = {{ paddingTop:6}}>我的医生</Text>
                    </View>
                </View>
                <View style={{}}>
                    <View style={[styles.detail_item]}>
                        <Text style = {[styles.detail_text]}>我的资料</Text>
                    </View>
                    <View style={[styles.detail_item]}>
                        <Text style = {[styles.detail_text]}>就诊记录</Text>
                    </View>
                    <View style={[styles.detail_item]}>
                        <Text style = {[styles.detail_text]}>我的收藏</Text>
                    </View>
                    <View style={[styles.detail_item]}>
                        <Text style = {[styles.detail_text]}>消费记录</Text>
                    </View>
                    <View style={[styles.detail_item]}>
                        <TouchableOpacity onPress={ () => navigation.navigate('Sign_out')} >
                            <Text style = {[styles.detail_text]}>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title_img : {
        height: 70, 
        width: 70, 
        backgroundColor: "#eee", 
        borderRadius: 35,
    },
    user_text : {
        fontSize: 24,
        paddingLeft : 30,
        color : '#fff',
    },
    my_set : {
        color : "#fff",
        fontSize : 18,
        paddingTop : 20,
        position : "absolute",
        bottom: 60, 
        right: 24,
    },
    title_line : {
        flex: 1,
        alignItems: 'center',
        justifyContent : "center",
    },
    title_line_text : {
        color : '#fff',
        fontSize : 18
    },
    detail_item : {
        backgroundColor : '#e0f0f8',
        paddingTop : 20,
        paddingBottom : 20,
        borderBottomWidth:1,
        borderBottomColor:'#e2eaee'
    },
    detail_text : {
        color : '#0075a9',
        paddingLeft : 20,
        fontSize : 18
    },
})
