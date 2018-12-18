/*
通过mutation间接更新state的多个方法的对象
*/

import {
	RECEIVE_TEST
	
} from './mutation-types'

import {
	reqBanners
	
} from '../api'

export default{
	//异步获取轮播图列表信息
	async getBannerList({commit}){
		//发送异步ajax请求
		const result = await reqBanners()
		//根据结果提交一个mutation
		if(result.OK===true){
			const testinfo = result.data
			commit(RECEIVE_TEST,{testinfo})
		}
	},
}