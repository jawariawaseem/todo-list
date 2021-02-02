/*
* @Author: JawariaWaseem
* @Date:   2021-01-22 21:33:16
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-22 21:33:46
*/
import React from 'react';
import { Link } from 'react-router-dom';

function Error(){
	return(
		<div><h3>404</h3><button><Link to="/">Back To Home</Link></button></div>
		);
}

export default Error;