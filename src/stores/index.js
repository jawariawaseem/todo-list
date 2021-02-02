/*
* @Author: JawariaWaseem
* @Date:   2021-01-18 23:38:51
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-18 23:41:25
*/
import { createStore } from "redux";
import rootReducers from "../reducers/index";

const store = createStore(rootReducers);

export default store;  