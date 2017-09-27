import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {addRecipe, removeFromCalendar} from '../actions'

class App extends Component {
  render() {
    console.log(this.props);
    return (
       <div>
        hello world!
      </div>
    );
  }
}

const mapStateToProps = ({food, calendar}, ownProps) => {
  const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar : weekDays.map(day => ({
      day   : day,
      meals : Object.keys(calendar[day]).reduce((meals, meal) => {
          meals[meal] = calendar[day][meal] 
            ? food[calendar[day][meal]]
            : null;
          return meals;
      }, {}) 
    }))
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe : (data) =>  dispatch(addRecipe(data)),
  remove    : (data) => dispatch(removeFromCalendar(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
