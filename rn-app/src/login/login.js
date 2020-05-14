import React from 'react'
import { View,
         Text,
         Button,
         ScrollView, 
         Dimensions, 
         Image, 
         TouchableOpacity, 
         AppRegistry,
         Component,
         StyleSheet,
         TextInput,
         ImageBackground,
         AsyncStorage
        } from 'react-native'
import HttpUtils from '../utils/request'
const { width,height } = Dimensions.get('window');
import {NavigationActions, StackActions} from 'react-navigation';

export default class Login extends React.Component{

    constructor(props) {
                super(props);
                this.afterEnd =  this._afterEnd;
                this.navigation = props.navigation;
                this.state = {
                  phone: '',
                  code: '',
                  token: '',
                  timeLeft:60,
                  begin:0,
                  isDisable:false
                };
            }
            componentDidMount() {
                // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
                // setTimeout(() => {
                //     SplashScreen.hide();
                // }, 1000);
            }
        
            static navigationOptions = {
                header:null,
            };
            countdownfn(timeLeft, callback, begin) {
                if (timeLeft > 0) {
                    this.state.begin = 1;
        
                    let that = this;
                    let interval = setInterval(function () {
                        if (that.state.timeLeft < 1) {
                            clearInterval(interval);
                            callback(that)
                            that.setState({
                                isDisable:false
                            })
                        } else {
                            let totalTime = that.state.timeLeft;
                            that.setState({
                                timeLeft: totalTime - 1,
                                isDisable:true
                            })
                        }
                    }, 1000)
                }
            }
            _beginCountDown() {
                alert("正在发送"+this.state.phone)
                if (this.state.begin === 1){
                    return;
                }
                let time = this.state.timeLeft;
                let afterEnd = this.afterEnd;
                let begin = this.state.begin;
                this.countdownfn(time, afterEnd, begin)
            }
            _afterEnd(that) {
                that.setState({
                    begin : 0,
                    timeLeft : 60,
        
                })
            }
            onPressLogin() {
                const {navigation} = this.props;
                const phone = this.state.phone;
                const code = this.state.code;
                const params = {
                    'phone' : phone
                }
                console.log('username,phone',params, phone,code);

                const userData = {
                    id : 4,
                    name : 'Eline',
                    phone : 52162010,
                }
                AsyncStorage.setItem('userData',JSON.stringify(userData))
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'Main'}),
                    ],
                });
                this.props.navigation.dispatch(resetAction)
                // if (phone && code && navigation) {
                //     HttpUtils.post('users/login',params).then((data) =>{
                //         console.log('data.data',data.data)
                //         if(data.errno == 0){
                //             console.log('userData',JSON.stringify(data.data))
                //             AsyncStorage.setItem('userData',JSON.stringify(data.data))
                //             const resetAction = StackActions.reset({
                //                 index: 0,
                //                 actions: [
                //                     NavigationActions.navigate({routeName: 'Main'}),
                //                 ],
                //             });
                //             this.props.navigation.dispatch(resetAction)
                //             console.log(data.data)
                            
                //             //
                //             //AsyncStorage只能存储字符串，需要把对象转换为字符串才行
                //         }else{
                //             alert(data.message)
                //         }
                //     }).catch((err) => {
    
                //     })
                // }  
                
            }

    render(){
        return (
            <ScrollView 
                contentContainerStyle={{ flex: 1 }} // 非常重要，让ScrollView的子元素占满整个区域
                keyboardDismissMode="on-drag" // 拖动界面输入法退出
                keyboardShouldPersistTaps="never" // 点击输入法以外的区域，输入法退出 不加这两句也可以实现点击空白处收回键盘
                scrollEnabled={false} // 当值为false的时候，内容不能滚动，默认值为true
            >
                <ImageBackground source={require('../img/pig.jpg')}  style={styles.container}>
                    {/* <View style={styles.containers}>
                        <Text style={styles.textStyle}>登录页面</Text>
                    </View> */}
                    {/* <View style={{height:height/10}}></View> */}
                    <View style={{height:height/3,width:width*0.9,opacity: 0.8,backgroundColor:"#fff",borderRadius: 6,alignItems:'center',justifyContent: 'center',}}>
                        <View style={[styles.view]}>
                            <Text style={styles.text}>手机号:</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="请输入您的手机号码"
                                clearButtonMode="while-editing"
                                secureTextEntry={false}
                                onChangeText={(text) => {
                                this.setState({
                                    phone: text
                                });
                                }}
                                value={this.state.phone}
                            />
                        </View>
                        <View style={[styles.view]}>
                            <Text style={styles.text}>验证码:</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="请输入验证码"
                                clearButtonMode="while-editing"
                                secureTextEntry
                                onChangeText={(text) => {
                                    this.setState({
                                        code: text
                                    });
                                }}
                                value={this.state.code}
                            />
                            <TouchableOpacity
                                disabled={this.state.isDisable}
                                onPress={this._beginCountDown.bind(this)}
                            >
                                <Text style={styles.texts} >{ this.state.begin === 0 ? '获取验证码' : this.state.timeLeft+"秒后重试"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.onPressLogin()}
                            >
                            <Text style={styles.buttonText}>登 录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#fff',
        alignItems:'center',
        zIndex:-1
    },
    inputView: {
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
        
    },
    button: {
        marginTop: 30,
        width:width*0.8,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#83a7f9',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    text: {
        lineHeight: 44,
        fontSize: 14,
        
    },
    texts: {
        lineHeight: 44,
        fontSize: 16,
        color:'#83a7f9'
    },
    view: {
        flexDirection: 'row',
        height: 44,
        width:width*0.8,
        marginTop:20
    },
    textInputStyle: {
        flex: 5,
        marginRight: 10,
        marginLeft:20,
        fontSize: 16,
        marginTop: 4,
        
    },
})
