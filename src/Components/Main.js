/*
* @Author: JawariaWaseem
* @Date:   2021-01-20 21:23:58
* @Last Modified by:   JawariaWaseem
* @Last Modified time: 2021-01-23 21:02:26
*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from "./List";
import Home from "./Home";
import AddTask from "./AddTask";
import AddCategory from "./AddCategory";
import Error from "./Error";
import Nav from "./Nav";

const Main = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          	<Route exact path='/' component={Home}></Route>
          	<Route exact path='/list' component={List}></Route>
    		    <Route exact path="/list/:category/" children={<List />}></Route>
          	<Route exact path='/addtask' component={AddTask}></Route>
          	<Route exact path='/addcategory' component={AddCategory}></Route>
          	<Route exact path='/list' component={List}></Route>
            <Route exact path="/error"><Error /></Route>
            <Route exact path="*"><Error /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;