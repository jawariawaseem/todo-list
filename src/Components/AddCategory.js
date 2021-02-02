/*
* @Author: JawariaWaseem
* @Date:   2021-01-21 20:35:55
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-25 23:49:38
*/
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { addCategory } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
	return { addCategory : category => dispatch(addCategory(category)) }
}

const Add = ({ addCategory }) => {

	const [category, setCategory] = useState('');
	const [navigate, setNavigate] = useState(false);

	const handleSubmit = (e) => {

		e.preventDefault();
		addCategory({id:category, category: category});
		setCategory('');
		setNavigate(true);
	}

	if (navigate) {
	    return <Redirect to="/" push={true} />
	}
	return(
		<>
			<h1 class="heading__primary">Add new category</h1>
			<section class="tasks">
				<form accept="#" class="form" onSubmit={(e) => handleSubmit(e)}>
					<div class="form__group">
						<input type="text" name="title" class="form__input" placeholder="Title" value={category} onChange={(e) => setCategory(e.target.value)}/>
					</div>
					<div class="form__group">
						<button class="btn btn__main"> + <span>Add Task</span></button>
					</div>
				</form>
			</section>
		</>
		);
}
const AddCategory = connect(null, mapDispatchToProps)(Add);
export default AddCategory;