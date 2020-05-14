//一个 Promise 就是一个代表了异步操作最终完成或者失败的对象

const comment_url = 'http://192.168.5.5:3000/';

export default class HttpUtils{

    static get(url,params){

        return new  Promise(((resolve, reject) => {//resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
            
            if (params) {
                let paramsArray = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            
            fetch(comment_url+url)//默认是GET
                .then(response=>response.json())//把数据解析成json格式,然后取出
                .then(result=>{
                       resolve(result);//表示完成
                })
                .catch(error=>{
                        reject(error);//表示失败
                })
            })
        )
    };
    static post=(url,data)=>{
        return new Promise(((resolve, reject) => {
            fetch(comment_url+url,{
                method:'POST',
                header:{
                    'Accept':'application/json',//告诉服务器，我们能接受json格式的返回类型，
                    'Content-Type':'application/json',//告诉服务器，我们提交的数据类型
                },
                body:JSON.stringify(data),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
            })//返回 服务器处理的结果
                .then(response=>{
                    response.json()
                })
                .then(result=>{
                    resolve(result);
                    console.log('result',result)
                })
                .catch(error=> {
                    reject(error);
                    console.log('error',error)
                })
            })
        )
    }
}
//数据转换成字符串 JSON.stringify(params)      //将数据JSON化 JSON.parse(responseJSON)