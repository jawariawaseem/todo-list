/*
* @Author: JawariaWaseem
* @Date:   2021-01-19 22:59:58
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-25 23:27:50
*/
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/index";
import { Redirect } from 'react-router';

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: task => dispatch(addTask(task))
	}
}
const mapStateToProps = (state) => {
	return {
		categories: state.categories
	}
}

const Add = ({ addTask, categories }) => {

	const [ title, setTitle ] = useState("");
	const [ description, setDescription ] = useState("");
	const [ task_type, setTaskType ] = useState("");
	const [navigate, setNavigate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const id =  randomInteger(10, 1000);
		addTask([{ id: id, title: title, description: description, category: task_type, date: new Date().toString(), is_completed: false }]);
		setTitle('');
		setDescription('');
		// setTaskType('');
		setNavigate(true);
	}
	function randomInteger(min, max) {
		 return Math.floor(Math.random() * (max - min + 1)) + min;
		}

	if (navigate) {
	    return <Redirect to={`/list/${task_type}`} push={true} />
	}
	return(
		<>
			<h1 className="heading__primary">Add new task</h1>
			<section className="tasks">
				<form accept="#" className="form" onSubmit={(e) => handleSubmit(e)}>
					<div className="form__group">
						<input type="text" name="title" className="form__input" placeholder="Title" alue={title} onChange={(e) => setTitle(e.target.value)}/>
					</div>
					<div className="form__group">
						<input type="text" name="description" className="form__input" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className="form__group">
						{
							categories.map(item => {
								return (<div className="form__radio-group">
									<input type="radio" id={item.id} name="task_type" className="form__radio-input" onChange={(e) => setTaskType(e.target.value)}/>
									<label for={item.id} className="form__radio-label">
										<span className="form__radio-button"></span>
									{item.category}</label>
								</div>)
								})
							}
					</div>
					<div className="form__group">
						<button className="btn btn__main"> + <span>Add Task</span></button>
					</div>
				</form>
			</section>
		</>
	);
}

const AddTask = connect(mapStateToProps, mapDispatchToProps)(Add);
export default AddTask;