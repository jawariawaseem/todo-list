/*
* @Author: JawariaWaseem
* @Date:   2021-01-18 23:42:19
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-23 00:45:29
*/
import { ADD_TASK, GET_TASKS, UPDATE_TASK, ADD_CATEGORY } from "../constants/action-types";

export function addTask(payload){
	return ({ type: ADD_TASK, payload: payload});
}

export function getTasks(text_type){
	return ({ type: GET_TASKS, text_type});
}

export function updateTask(payload){
	return ({ type: UPDATE_TASK, payload:payload});
}

export function addCategory(payload){
	return ({ type: ADD_CATEGORY, payload});
}