import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import News from "../components/News"
import Home from "../components/Home";
import My from "../components/My";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {StyleSheet} from "react-native"

const BottomNavigator = createBottomTabNavigator(//屏幕下方导航栏
    {
        Home: {
            screen: Home,//展示的页面
            navigationOptions: {//填写属性
                title: "首页",
                tabBarIcon:({ focused, horizontal, tintColor })=>{
                    return <FontAwesome5 name={'home'} style={[{color:tintColor},styles.icon]}/>
                }
            }
        },
        News: {
            screen: News,
            navigationOptions: {
                title: "消息",
                tabBarIcon:({ focused, horizontal, tintColor })=>{
                    return <FontAwesome5 name={'comment-alt'} style={[{color:tintColor},styles.icon]}/>
                }
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                title: "我的",
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <FontAwesome5 name={'user'} style={[{color:tintColor},styles.icon]}/>
                }
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor:"#00a0e9",
            style:{
                height:45
            }
        }
    }
)

// const StackNavigator = createStackNavigator(//屏幕上方导航栏
//     {
//         Home: {
//             screen: BottomNavigator,
//             navigationOptions: {
//                 title: "吉大一院",
//                 headerTitleStyle:{
//                     fontSize:20,
//                     color:"#fff"
//                 },
//                 headerStyle:{
//                     height:45,
//                     color:"#fff",
//                     backgroundColor:"#00a0e9"
//                 }
//             }
//         }
//     },
//     {
//         initialRouteName: "Home",//默认路由，第一次跳转的时候
//         headerLayoutPreset: "center"
//     },

// )

const styles = StyleSheet.create({
    icon: {
      fontSize: 16,
    },
});

export default createAppContainer(BottomNavigator)