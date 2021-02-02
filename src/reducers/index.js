/*
* @Author: JawariaWaseem
* @Date:   2021-01-18 23:34:20
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-23 01:05:06
*/
import { ADD_TASK, GET_TASKS, UPDATE_TASK, ADD_CATEGORY } from "../constants/action-types";
import { tasks } from "../data/tasks";
import { categories } from "../data/categories";

const initialState = {
	tasks : tasks,
	filteredTasks: tasks,
	categories : categories,
};
const rootReducers = (state = initialState, action) => {
	if(action.type === GET_TASKS){ 
		const task_type = action.text_type;
		// state = initialState;
		const filteredItems = state.tasks.filter(task => task.category === task_type);
		return {...state, filteredTasks: filteredItems};
		// return {...state, tasks: filteredItems};
	}

	if(action.type === ADD_TASK){
		return {...state, tasks: state.tasks.concat(action.payload) };
	}

	if(action.type === UPDATE_TASK){
		const newResult = state.tasks.map(item => 
			item.id === action.payload.id ? {...item, is_completed: action.payload.is_completed} : item
		);
		return {...state, tasks: newResult };
	}

	if(action.type === ADD_CATEGORY){
		return {...state, categories: state.categories.concat(action.payload) };
	}

	return {...state};
}

export default rootReducers;