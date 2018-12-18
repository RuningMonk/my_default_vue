// ajax请求函数模块
import axios from 'axios'

export default function ajax (url,data={},type="GET") {
	//Promise()返回的数据是response.data
	return new Promise(function(resolve,reject){
		//在这里面执行异步请求
		let promise
		if(type=="GET"){
			let dataStr=''
			Object.keys(data).forEach(key=>{
				dataStr += key+'='+data[key]+'&'
			})
			if(dataStr!=""){
				dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
				url=url+'?'+dataStr
			}
			//发送GET请求
			promise=axios.get(url)
		}else{
			//发送POST请求
			// console.log(data)
			promise=axios.post(url,data)
		}
		promise.then(function(response){
			//成功->调用resolve()
			resolve(response.data)
		})
			.catch(function(error){
			//失败->调用reject()
			reject(error)
		})
		
	})
	
	
	return promise
}