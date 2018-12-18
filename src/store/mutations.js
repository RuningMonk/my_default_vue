/*
直接更新state的多个方法的对象
*/

import {
	RECEIVE_TEST
	
} from './mutation-types'

import Vue from 'vue'

export default {
	[RECEIVE_TEST](state, {testinfo}) {
		state.testinfo = testinfo
	}
}
