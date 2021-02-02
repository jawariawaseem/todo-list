/*
* @Author: JawariaWaseem
* @Date:   2021-01-18 23:18:16
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-25 23:45:24
*/
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTasks, updateTask } from "../actions/index";
import { Link, useParams } from 'react-router-dom';
import symboldefs from "../img/symbol-defs.svg";

const mapStateToProps = (state) => {
		return{ tasks : state.filteredTasks };
}
const mapDispatchToProps = dispatch => {
  return {
    	getTasks: text_type => dispatch(getTasks(text_type)),
		updateTask: payload => dispatch(updateTask(payload))
	}
}


const ListData = ({tasks, getTasks, updateTask}) => {
	const {category} = useParams();
	const [ checked, setChecked ] = useState(false);

	useEffect(() =>{
		getTasks(category);
	},[checked]);

	const handleChange = (id,e) => {
		setChecked(e.target.value);
		updateTask({id: id, is_completed: !checked});	
		setChecked(!checked);
		console.log(checked);
	}

	return(
		<section className="todo">
			<div className="todo__heading ">
				<svg className="todo__icon">
					<use href={symboldefs + "#icon-school"}></use>
				</svg>
				<h1 className="heading__primary">
					School
				</h1>

				<h3 className="heading__tertiary--2 u-margin-bottom-small">Tasks</h3>
			</div>
			<ul className="todo__list">
				<div className="todo__box">
					<h3 className="heading__tertiary--2">Today</h3>
					{
						tasks.map(task => {
							return(<div className="todo__group">
								<li key={task.id} className="todo__items">
									<input type="checkbox" name={task.id} id={task.id} className="form__checkbox-input" onChange={(e) => handleChange(task.id,e)} checked={task.is_completed}/>
									<label for={task.id} className="form__checkbox-label"><span className="form__checkbox-button"></span>{task.title}</label>
								</li>
							</div>)
						})
					}	
				</div>	
			</ul>
			<div class="todo__btn">
				<Link to="/addtask" className="btn__add btn__add--blue">+</Link>
				<span className="todo__btn-text">Add new task</span>
			</div>
		</section>
	);
}

const List = connect(mapStateToProps,mapDispatchToProps)(ListData);
export default List;