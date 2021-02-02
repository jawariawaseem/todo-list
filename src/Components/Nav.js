/*
* @Author: JawariaWaseem
* @Date:   2021-01-22 21:29:05
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-25 23:06:55
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
	return(
		<nav className="nav">
			<div className="nav__icons">
				<Link to="/" className="nav__icons-btn">&larr;</Link>	
				<img src={require("../logo.svg")} className="nav__icons-img" />
			</div>
		</nav>
		);
}

export default Nav;