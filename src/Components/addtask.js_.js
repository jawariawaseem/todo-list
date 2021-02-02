/*
* @Author: JawariaWaseem
* @Date:   2021-01-19 22:59:58
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-25 23:12:02
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
			<h1 class="heading__primary">Add new task</h1>
			<section class="tasks">
				<form accept="#" class="form" onSubmit={(e) => handleSubmit(e)}>
					<div class="form__group">
						<input type="text" name="title" class="form__input" placeholder="Title" alue={title} onChange={(e) => setTitle(e.target.value)}/>
					</div>
					<div class="form__group">
						<input type="text" name="description" class="form__input" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="title">Title</label>
						<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="description">description</label>
						<input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="task_type">Task Type</label>
						<select name="task_type" id="task_type" onChange={(e) => setTaskType(e.target.value)}>
							{
								categories.map(item => {
									return (<option value={item.id}>{item.category}</option>)
								})
							}
						}
						</select>
					</div>
					<div>
						<button type="submit">Add</button>
					</div>
				</form>
			</section>
		</>
	);
}

const AddTask = connect(mapStateToProps, mapDispatchToProps)(Add);
export default AddTask;