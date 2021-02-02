/*
* @Author: JawariaWaseem
* @Date:   2021-01-21 20:11:09
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-23 23:44:13
*/
import React from "react";
import { connect } from "react-redux";
import CategoryData from "./CategoryData";

const mapStateToProps = (state) => {
		return{ categories : state.categories };
}

const HomeData = ({ categories }) => {

	return(
			<>
				<CategoryData />
			</>
		)
}

const Home = connect(mapStateToProps)(HomeData);
export default Home;