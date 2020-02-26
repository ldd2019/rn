import React from 'react'
import { View, Text } from 'react-native';


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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>WelcomePage Screen</Text>
                <Text>欢迎欢迎</Text>
                <Text>欢迎欢迎</Text>
                <Text>欢迎欢迎</Text>
                <Text style={{position:'absolute', top: 40, right: 10}}>{time}</Text>
            </View>
        );
    }
}