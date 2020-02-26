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

// 欢迎页   //欢迎页用stack？？//其他的路由管理方式不是路由栈的方式
const InitNavigator = createStackNavigator({
        WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            headerShown: false
        }
    }
})
//键值对 前面就是路由的名字 后面是这个路由下的组件和其他配置信息
//因为只有第一个注册的路由是没有返回键的 其他后面不管第二还是第三的路由 顺序都是有返回键的
//所以titlepage有返回键
const TotalNavigator = createStackNavigator({//头部导航栏设定
    Main: BottomNavigator,//底部导航都是定义的第一个路由中的所以他就是路由栈中最上面的一层
    TitlePage: {//titlepage是bottom 的嵌套子页面，子路由
        screen: TitlePage,
        navigationOptions: {
            title: '挂号',
            headerTintColor: '#fff',//标题字体颜色
            headerStyle: {//标题模块的样式
                backgroundColor: '#83a7f9',
            },
            // header: null
        }
    },
    // NOTE: 其余路由在这里注册 

})
//SwitchNavigator 的用途是一次只显示一个页面。 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态
//这里将欢迎页与路由首页放在一起输出
const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Total: TotalNavigator,
})
//第二种写法：
// const RootNavigator = createSwitchNavigator({
//     Init: {
//         screen: WelcomePage,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     Total: TotalNavigator,
// })

const styles = StyleSheet.create({
    icon: {
        fontSize: 16,
    },
});
//App 容器负责管理应用的 state, 并将顶层的 navigator 链接到整个应用环境。
export default createAppContainer(RootNavigator)// 使用react-navigation做路由管理，需要将我们的项目包裹在createAppContainer中