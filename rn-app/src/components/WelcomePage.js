import React from 'react'
import { View, Text, ImageBackground,Dimensions} from 'react-native';

const { width,height } = Dimensions.get('window');//用于获取屏幕设备的宽高
//  欢迎页面
export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 3, // 倒计时开始时间
        }
    }
    componentDidMount() {
        let {time} = this.state
        this.timer = setInterval(() => {
            if (time === 0) {
                clearInterval(this.timer)
                //   这里跳转
                this.props.navigation.navigate('Main')
            } else {
                time --
                this.setState({
                    time,
                })
            }
        }, 1000)
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    render() {
        const {time} = this.state
        return (
            <ImageBackground source={require('../img/pig.jpg')} style={{height:height,width:width}}>
                <View style={{ flex: 1, }}>
                    <Text style={{fontSize:30,paddingTop:150,textAlign:'center',color:"#fff"}}>欢迎欢迎</Text>
                    <Text style={{position:'absolute', top: 40, right: 30,color:"#fff"}}>{time}</Text>
                </View>
            </ImageBackground>
        );
    }
}