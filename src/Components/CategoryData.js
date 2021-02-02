/*
* @Author: JawariaWaseem
* @Date:   2021-01-19 21:07:48
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-27 21:01:20
*/
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import symboldefs from "../img/symbol-defs.svg";

const mapStateToProps = (state) => {
		return{ 
			categories : state.categories,
			tasks: state.tasks
			};
}


const Data = ({ categories, tasks }) => {

	return(
			<>
			<h1 className="heading__primary u-margin-bottom-medium">
			Hey Jawaria, <span className="heading__primary--sub">this is your to-do list</span>
			</h1>
			<ul className="nav__list">
				<li className="nav__list-item">Today</li>
				<li className="nav__list-item">Week</li>
				<li className="nav__list-item">Month</li>
			</ul>
				<section className="categories">
					{
						categories.map(item => {
							return(
								<div key={item.id} className="categories__box categories__box--1">
									<svg className="categories__icon categories__icon--1">
										<use href={symboldefs + "#icon-new-message"}></use>
									</svg>
									<h2 className="heading__secondary">
										<Link className="heading__link" to={`/list/${item.id}`}>{ item.category }</Link>
									</h2>
									<h2 className="heading__tertiary">{tasks.filter(task => task.category === item.id).length} tasks</h2>
								</div>
								)
						})
					}
				</section>
				<section className="u-margin-top-small">
					<Link to="/addcategory" className="btn__add btn__add--green">
					    +
					</Link>
				</section>
			</>
		)
}

const CategoryData = connect(mapStateToProps)(Data);
export default CategoryData;