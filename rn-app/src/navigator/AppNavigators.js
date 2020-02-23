import React from 'react'
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import News from "../components/News"
import Home from "../components/Home";
import My from "../components/My";
import TitlePage from "../components/Title"
import WelcomePage from "../components/WelcomePage"

const BottomNavigator = createBottomTabNavigator(//屏幕下方导航栏
    {
        Home: {
            screen: Home,//展示的页面
            navigationOptions: {//填写属性
                title: "首页",
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <FontAwesome5 name={'home'} style={[{ color: tintColor }, styles.icon]} />
                }
            }
        },
        News: {
            screen: News,
            navigationOptions: {
                title: "消息",
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <FontAwesome5 name={'comment-alt'} style={[{ color: tintColor }, styles.icon]} />
                }
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                title: "我的",
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <FontAwesome5 name={'user'} style={[{ color: tintColor }, styles.icon]} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#83a7f9",
            style: {
                height: 45
            }
        },
    }
)

BottomNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name

    if (routeName === 'Home') {
        return {
            title: '智能导诊',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#83a7f9',
            },
        }
    } else {
        return {
            title: routeName,
            // header: null,
        }
    }

};

// 欢迎页
const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            headerShown: false
        }
    }
})

const TotalNavigator = createStackNavigator({//头部导航栏设定
    Main: BottomNavigator,
    TitlePage: {
        screen: TitlePage,
        navigationOptions: {
            title: 'title的路由标题'
            // header: null
        }
    },
    // NOTE: 其余路由在这里注册 

})

const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Total: TotalNavigator,
})


const styles = StyleSheet.create({
    icon: {
        fontSize: 16,
    },
});

export default createAppContainer(RootNavigator)